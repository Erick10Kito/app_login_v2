import { useContext, useState } from "react";
import { Login } from "../../Components/Login";
import { Register } from "../../Components/Registro";
import { AuthContext } from "../../contexts/AuthContext";
import { AfterLogin } from "../AfterLogin";

function Home() {
  const { user } = useContext(AuthContext);

  const [selectedLoginOrRegister, setSelectedLoginOrRegister] = useState<
    "login" | "register"
  >("login");
  return (
    <>
      {!user.name ? (
        <div className="flex justify-center items-center h-screen bg-gray-700 ">
          <div className="w-[700px] ">
            <div className="flex justify-center ">
              <div className="w-full bg-gray-900 pt-8 rounded-t-[10px]">
                <div className="mb-8 px-4">
                  <h1 className="text-white font-['Titillium_Web'] text-[40px]">
                    Bem vindo!
                  </h1>
                  <p className="text-white font-['Titillium_Web'] text-[18px]">
                    Selecione uma opção e continue o processo!
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedLoginOrRegister("login")}
                    className="duration-[0.5s] text-white h-12 items-center w-6/12 flex justify-center hover:bg-gray-200 hover:text-gray-900 font-['Titillium_Web'] text-[20px]"
                  >
                    <h3 className="">Login</h3>
                  </button>
                  <button
                    onClick={() => setSelectedLoginOrRegister("register")}
                    className="duration-[0.5s] text-white h-12 items-center w-6/12 flex justify-center hover:bg-gray-200 hover:text-gray-900 font-['Titillium_Web'] text-[20px]"
                  >
                    <h3 className="">Register</h3>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-12 pb-12 bg-gray-200 rounded-b-[10px]">
              {selectedLoginOrRegister === "login" ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      ) : (
        <AfterLogin />
      )}
    </>
  );
}

export { Home };
