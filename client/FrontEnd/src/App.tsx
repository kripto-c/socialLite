import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/HomeNL/About/About";
import Contact from "./pages/HomeNL/About/About";
import Registrarse from "./pages/HomeNL/Registrarse/Registrarse";
import Login from "./pages/HomeNL/Login/Login";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
