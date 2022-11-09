import { createContext, ReactElement, useState } from "react";

interface IUser {
  id?: string;
  avatar?: string;
  name?: string;
  mail?: string | null;
  children?: ReactElement;
}

interface IUnformatedUserData {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

interface IAuthContext {
  user: IUser;
  setLogin: (user: IUnformatedUserData) => void | null;
}

const formatUserData = ({
  uid,
  displayName,
  photoURL,
  email,
}: IUnformatedUserData): IUser => {
  if (!displayName || !photoURL) {
    throw new Error("O Usuario não tem Nome ou Foto");
  }
  return {
    id: uid,
    avatar: photoURL,
    name: displayName,
    mail: email,
  };
};

export const AuthContext = createContext({} as IAuthContext);

export default function AuthContextProvider(props: IUser) {
  const [user, setUser] = useState<IUser>({
    id: "",
    avatar: "",
    name: "",
    mail: "",
  });

  const setLogin = ({
    uid,
    displayName,
    photoURL,
    email,
  }: IUnformatedUserData) => {
    const formated = formatUserData({ uid, displayName, photoURL, email });
    setUser(formated);
  };
  return (
    <AuthContext.Provider value={{ user, setLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}
