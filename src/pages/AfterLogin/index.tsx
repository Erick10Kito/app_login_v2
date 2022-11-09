import { useContext } from "react";
import { HeaderAfterLogin } from "../../Components/HeaderAfterLogin";
import { AuthContext } from "../../contexts/AuthContext";

function AfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-700">
      <HeaderAfterLogin />
      <div>
        <div className="px-4 flex items-center justify-between">
          <div className="h-[350px] flex items-center w-[50%]">
            <div>
              <img
                className="h-48 border-solid border-2 border-white rounded-[10px]"
                src={user.avatar}
              />
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
              <button className="h-48 w-48 border-dashed border-2 border-white rounded-[10px] text-white">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-[350px] bg-gray-200 px-4 py-16">
          <p>OLA</p>
        </div>
      </div>
    </div>
  );
}

export { AfterLogin };
