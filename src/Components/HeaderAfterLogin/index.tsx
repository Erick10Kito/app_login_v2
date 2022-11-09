import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Logout } from "../../services/firebase";

function HeaderAfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-900 px-4 p-2">
        <h1 className="font-['Titillium_Web'] text-3xl leading-[55px] text-white">
          Seja Bem Vindo {user.name}
        </h1>
        <button onClick={() => Logout()}>
          <SignOut size={32} weight="bold" color="white" alt="Delogar" />
        </button>
      </div>
    </div>
  );
}

export { HeaderAfterLogin };
