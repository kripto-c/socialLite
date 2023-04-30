import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/HomeNL/About/About";
import Contact from "./pages/HomeNL/About/About";
import Registrarse from "./pages/HomeNL/Registrarse/Registrarse";
import Login from "./pages/HomeNL/Login/Login";
import RutasAcoutn from "./pages/Home/routes";
import { Toaster } from "sonner";
import VerifyAcoutn from "./pages/HomeNL/verifyAcount/Verify";

function App() {
  return (
    <>
      <Toaster richColors closeButton expand={true} />
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/about" element={<About />} />
          <Route path="/validate/:id" element={<VerifyAcoutn />} />
          <Route path="/login/*" element={<RutasAcoutn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
