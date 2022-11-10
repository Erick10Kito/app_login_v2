import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { ButtonGoogleLogin } from "../ButtonGoogleLogin/";
import { InputApp } from "../Input/";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando</p>;
  }

  return (
    <div>
      <div>
        <form className="bg-[transparent] flex flex-col items-center gap-[25px]">
          <InputApp
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputApp
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="duration-[0.5s] font-['Titillium_Web'] bg-gray-300 py-2 px-6 hover:bg-gray-700 hover:text-white"
            onClick={handleSignOut}
          >
            Registrar
          </button>
        </form>
      </div>

      <p className="font-['Titillium_Web'] text-[25px] text-center my-[20px]">
        Ou
      </p>
      <div className="flex justify-center">
        <ButtonGoogleLogin />
      </div>
    </div>
  );
}

export { Register };
