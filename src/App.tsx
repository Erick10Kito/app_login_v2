import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import "../src/index.css";
import { Header } from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
