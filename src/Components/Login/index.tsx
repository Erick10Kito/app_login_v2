import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth, loginGoogle } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { InputApp } from "../Input/";
import IconeGoogle from "../../assets/googleIcon.png";

function Login() {
  const { setLogin } = useContext(AuthContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(user);
      }
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLogin(result.user);
        console.log(result);
      })
      .catch((error) => {
        setErrorMessage(`${error.code} - ${error.message}`);
      });
  }

  const handleClickButtonLogin = async () => {
    const result = await loginGoogle();

    if (result.user) {
      setLogin(result.user);
      console.log(result.user);
    }
  };

  return (
    <div>
      <div>
        <form className="bg-[transparent] flex flex-col items-center gap-[25px]">
          <p>{errorMessage}</p>
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
            type="submit"
            onClick={(e) => handleSignIn(e)}
          >
            Logar
          </button>
        </form>
      </div>

      <p className="font-['Titillium_Web'] text-[25px] text-center my-[20px]">
        Ou
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => handleClickButtonLogin()}
          type="button"
          className="flex items-center gap-[10px] py-2 px-8 border border-solid border-black"
        >
          <img className="h-6" src={IconeGoogle} />
          <p>Entrar com o google</p>
        </button>
      </div>
    </div>
  );
}

export { Login };
