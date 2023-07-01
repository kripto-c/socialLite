import { useRef, useEffect, useState } from "react";
import NavBarN from "./NavBarN";
import NavBarL from "./NavBarL";
import { useLogin } from "../../store/LoginStore/LoginStore";
import CerrarSession from "./logout/CerrarSession";
import "./NavBar.scss";

export function BarraMenu() {
  return (
    <div className="menu-Barra">
      <h1>SociaLite</h1>
      <div className="opt">
        <button className="minimize">_</button>
        <button className="exit" onClick={() => closeApp()}>
          X
        </button>
      </div>
    </div>
  );
}

function NavBar() {
  const [hover, setHover] = useState<boolean>(false);
  const nav = useRef<HTMLParagraphElement>(null);
  const loginStore = useLogin((state) => state);
  const [cs, setCS] = useState<boolean>(false);

  useEffect(() => {
    nav.current?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    nav.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });
  }, [loginStore.isLogin]);
  return (
    <nav className="nav" id={hover ? "hover" : ""}>
      {loginStore.isLogin ? <NavBarL set={setCS} value={cs} /> : <NavBarN />}
      {cs ? <CerrarSession set={setCS} value={cs} /> : null}
    </nav>
  );
}

export default NavBar;
