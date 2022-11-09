import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth, loginGoogle } from "../../services/firebase";
import { ButtonGoogleLogin } from "../ButtonGoogleLogin/buttonGoogleLogin";
import { InputApp } from "../Input/input";
import IconeGoogle from "../../assets/googleIcon.png";

function Login() {
  const { user, setLogin } = useContext(AuthContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(user);
      }
    });
  }, []);

  const handleClickButtonLogin = async () => {
    const result = await loginGoogle();

    if (result.user) {
      setLogin(result.user);
      console.log(result.user);
    }
  };

  return (
    <div>
      <h1 className="text-black text-center mb-5 font-['Titillium_Web'] text-[25px]">
        Faça Login com:
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
        <ButtonGoogleLogin
          onClick={() => handleClickButtonLogin()}
          type="button"
        />
      </div>
    </div>
  );
}

export { Login };
