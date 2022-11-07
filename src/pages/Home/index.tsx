import { useState } from "react";
import { Login } from "../Login";
import { Register } from "../Registro";

function Home() {
  const [selectedLoginOrRegister, setSelectedLoginOrRegister] = useState<
    "login" | "register"
  >("login");
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full bg-gray-900 pt-8 px-4">
          <div className="mb-8">
            <h1 className="text-white">Bem vindo!</h1>
            <p className="text-white">
              Selecione uma opção e continue o processo!
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setSelectedLoginOrRegister("login")}
              className="duration-[0.5s] text-white h-12 items-center w-6/12 flex justify-center hover:bg-white hover:text-gray-900"
            >
              <h3 className="">Login</h3>
            </button>
            <button
              onClick={() => setSelectedLoginOrRegister("register")}
              className="duration-[0.5s] text-white h-12 items-center w-6/12 flex justify-center hover:bg-white hover:text-gray-900"
            >
              <h3 className="">Register</h3>
            </button>
          </div>
        </div>
      </div>
      <div>
        {selectedLoginOrRegister === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export { Home };
