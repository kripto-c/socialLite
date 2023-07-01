import { Route, Routes } from "react-router-dom";
import NavBar, { BarraMenu } from "./components/NavBar/NavBar";
import About from "./pages/HomeNL/About/About";
import Contact from "./pages/HomeNL/About/About";
import Registrarse from "./pages/HomeNL/Registrarse/Registrarse";
import Login from "./pages/HomeNL/Login/Login";
import RutasAcoutn from "./pages/Home/routes";
import { Toaster } from "sonner";
import VerifyAcoutn from "./pages/HomeNL/verifyAcount/Verify";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ValidateToken } from "./GraphQL/validateToken";
import { useLogin } from "./store/LoginStore/LoginStore";
import { useNavigate } from "react-router-dom";

function App() {
  const [validateToken, setValidateToken] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const loginStore = useLogin((state) => state);
  const nagivate = useNavigate();

  const { loading: load, data: validate } = useQuery(ValidateToken, {
    skip: !validateToken,
    variables: { token: token },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      setToken(token);
      setValidateToken(true);
    }
  }, []);
  useEffect(() => {
    if (validate) {
      loginStore.setLogin(validate.validarToken);
      nagivate("/login/");
    }
  }, [validate]);

  return (
    <>
    <BarraMenu />
      <div className="contenedorGlobal">
        <Toaster richColors closeButton expand={true} />
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/about" element={<About />} />
            <Route path="/login/*" element={<RutasAcoutn />} />
            <Route path="/validate/:id" element={<VerifyAcoutn />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
