import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter } from "react-router-dom";
import Iniciar from "./pages/Iniciar";
import { useNavigate } from "react-router-dom";
import form from "./pages/form";
import { InfoProvider } from "./contex/useinfo";
import New from "./pages/new";
import principal from "./pages/principal";
import banco from "./pages/banco";
import saldo from "./pages/saldo";

const App = () => {

  return (
    <InfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/banco" Component={banco} />
          <Route path="/saldo" Component={saldo} />
          <Route path="/" Component={principal} />
          <Route path="/New" Component={New} />
          <Route path="/form" Component={form} />
          <Route path="/iniciar" Component={Iniciar} />
        </Routes>
      </BrowserRouter>
    </InfoProvider>

  )
}

export default App

