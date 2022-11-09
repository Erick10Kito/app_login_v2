import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function HeaderAfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-900 px-4 h-20">
        <h1 className="font-['Titillium_Web'] text-5xl leading-[55px] text-white">
          Seja Bem Vindo {user.name}
        </h1>
        <button>
          <SignOut size={32} weight="bold" color="white" alt="Delogar" />
        </button>
      </div>
    </div>
  );
}

export { HeaderAfterLogin };
