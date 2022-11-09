import { useContext } from "react";
import { HeaderAfterLogin } from "../../Components/HeaderAfterLogin";
import { AuthContext } from "../../contexts/AuthContext";

function AfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-700">
      <HeaderAfterLogin />
      <div>
        <div className="h-[350px] flex items-center px-4">
          <div>
            <img
              className="h-48 border-solid border-2 border-white rounded-[10px]"
              src={user.avatar}
            />
          </div>
          <div>
            <h2>{user.name}</h2>
            <p>{user.mail}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export { AfterLogin };
