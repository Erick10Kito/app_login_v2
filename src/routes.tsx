import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Registro";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Rotas;
