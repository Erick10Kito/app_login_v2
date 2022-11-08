import { ButtonGoogleLogin } from "../ButtonGoogleLogin/buttonGoogleLogin";
import { InputApp } from "../Input/input";

function Register() {
  return (
    <div>
      <h1 className="text-black text-center mb-5 font-['Titillium_Web'] text-[25px]">
        Registre-se com:
      </h1>
      <div>
        <form className="bg-[transparent] flex flex-col items-center gap-[25px]">
          <InputApp type="text" name="email" id="email" placeholder="email" />
          <InputApp
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
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
