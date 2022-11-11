import React, { useContext, useState } from "react";
import { HeaderAfterLogin } from "../../Components/HeaderAfterLogin";
import { AuthContext } from "../../contexts/AuthContext";

import AnonimoProfile from "../../assets/Anonimo.png";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services/firebase";

function AfterLogin() {
  const { user } = useContext(AuthContext);

  const [imgUrl, setImgUrl] = useState("");
  const [progressBar, setProgressBar] = useState(0);

  const handleUploadFunction = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log("file");
    e.preventDefault();
    const file = e.target.files;
    if (!file) return;

    const StorageRef = ref(storage, `images/${file[0].name}`);
    const uploadTask = uploadBytesResumable(StorageRef, file[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
        });
      }
    );
  };

  return (
    <>
      <HeaderAfterLogin />
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 flex items-center justify-between">
          <div className="flex items-center w-[50%]">
            <div>
              {user.avatar ? (
                <img
                  className="h-32 border-solid border-2 border-white rounded-[10px]"
                  src={user.avatar}
                />
              ) : (
                <img
                  className="h-32 w-32 border-solid border-2 border-white rounded-[10px]"
                  src={AnonimoProfile}
                />
              )}
            </div>
            <div className="ml-8">
              {user.name ? (
                <h2 className="text-white text-3xl font-['Titillium_Web']">
                  {user.name}
                </h2>
              ) : (
                <h2 className="text-white text-3xl font-['Titillium_Web']">
                  Usuario Sem Nome
                </h2>
              )}
              <p className="font-['Titillium_Web'] text-xl text-white">
                {user.mail}
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <form
                onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
                  handleUploadFunction(e)
                }
              >
                <div className="h-32 w-32 border-dashed border-2 border-white rounded-[10px] text-white">
                  <input className="w-full h-full cursor-pointer" type="file" />
                </div>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 px-4 py-16">
          {!imgUrl ? (
            <progress value={progressBar} max="100" />
          ) : (
            <img src={imgUrl} />
          )}
        </div>
      </div>
    </>
  );
}

export { AfterLogin };
