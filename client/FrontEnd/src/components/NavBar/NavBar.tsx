import { NavLink } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import NavBarN from "./NavBarN";
import NavBarL from "./NavBarL";
import { isLogin } from "../../store/store";
import CerrarSession from "./logout/CerrarSession";
import "./NavBar.scss";

function NavBar() {
  const [hover, setHover] = useState<boolean>(false);
  const nav = useRef<HTMLParagraphElement>(null);
  const log = isLogin((state) => state.log);
  const [cs, setCS] = useState<boolean>(false);

  useEffect(() => {
    console.log(log);
    nav.current?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    nav.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });
  }, [log]);
  return (
    <nav className="nav" id={hover ? "hover" : ""}>
      {log ? <NavBarL set={setCS} value={cs} /> : <NavBarN />}
      {cs ? <CerrarSession set={setCS} value={cs} /> : null}
    </nav>
  );
}

export default NavBar;
