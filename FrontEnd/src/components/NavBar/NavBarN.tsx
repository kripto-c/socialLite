import { NavLink } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./NavBar.scss";

function NavBarN() {
  const [hover, setHover] = useState<boolean>(false);
  const nav = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    nav.current?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    nav.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });
  }, []);
  return (
    <nav className="nav" id={hover ? "hover" : ""}>
      <h1 className="title">
        <span>Socia</span>
        <span>Lite</span>
      </h1>
      <div className="nav-container" ref={nav}>
        <ul>
          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/"
            >
              <img draggable="false" src="/icon/log_icon.png" alt="" />
              <span>Sign in</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/registrarse"
            >
              <img draggable="false" src="/icon/reg_icon.png" alt="" />
              <span>Sign up</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              to="/about"
            >
              <img draggable="false" src="/icon/contacto_icon.png" alt="" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarN;
