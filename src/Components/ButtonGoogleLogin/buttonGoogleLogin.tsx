import { ButtonHTMLAttributes } from "react";
import IconeGoogle from "../../assets/googleIcon.png";

function ButtonGoogleLogin(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="flex items-center gap-[10px] py-2 px-8 border border-solid border-black">
      <img className="h-6" src={IconeGoogle} />
      <p>Logar com o google</p>
    </button>
  );
}

export { ButtonGoogleLogin };
