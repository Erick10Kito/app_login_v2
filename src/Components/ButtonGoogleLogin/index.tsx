import { ButtonHTMLAttributes, useContext } from "react";
import IconeGoogle from "../../assets/googleIcon.png";
import { AuthContext } from "../../contexts/AuthContext";
import { loginGoogle } from "../../services/firebase";

function ButtonGoogleLogin(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="flex items-center gap-[10px] py-2 px-8 border border-solid border-black">
      <img className="h-6" src={IconeGoogle} />
      <p>Entrar com o google</p>
    </button>
  );
}

export { ButtonGoogleLogin };
