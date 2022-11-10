import { useContext } from "react";
import { HeaderAfterLogin } from "../../Components/HeaderAfterLogin";
import { AuthContext } from "../../contexts/AuthContext";
import IconeGoogle from "../../assets/googleIcon.png";

function AfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <HeaderAfterLogin />
      <div className="h-full flex flex-col">
        <div className="px-4 flex items-center justify-between">
          <div className="py-6 flex items-center w-[50%]">
            <div>
              {user.avatar ? (
                <img
                  className="h-32 border-solid border-2 border-white rounded-[10px]"
                  src={user.avatar}
                />
              ) : (
                <img className="h-6" src={IconeGoogle} />
              )}
            </div>
            <div className="ml-8">
              <h2 className="text-white text-3xl font-['Titillium_Web']">
                {user.name}
              </h2>
              <p className="font-['Titillium_Web'] text-xl text-white">
                {user.mail}
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <button className="h-32 w-32 border-dashed border-2 border-white rounded-[10px] text-white">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 px-4 py-16">Galeria</div>
      </div>
    </>
  );
}

export { AfterLogin };
