import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import "../src/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
