import { NavLink } from "react-router-dom";
import { useRef, useEffect, useState, Dispatch, SetStateAction } from "react";
import "./NavBar.scss";

interface Props {
  set: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}

function NavBarL(props: Props) {
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
              to="/login/"
            >
              <img draggable="false" src="/icon/noticias.png" alt="" />
              <span>Inicio</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/login/acountInfo"
            >
              <img draggable="false" src="/icon/acount.png" alt="" />
              <span>Mi cuenta</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/login/chats"
            >
              <img draggable="false" src="/icon/chat.png" alt="" />
              <span>Mensajes</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/login/settings"
            >
              <img draggable="false" src="/icon/config.png" alt="" />
              <span>Settings</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/login/friends"
            >
              <img draggable="false" src="/icon/amiko.png" alt="" />
              <span>Amigos</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(isActive) => (isActive ? "active" : "a")}
              draggable="false"
              to="/login/soport"
            >
              <img draggable="false" src="/icon/soporte.png" alt="" />
              <span>Soporte</span>
            </NavLink>
          </li>

          <li>
            <button
              className="CerrarSession"
              onClick={() => props.set(!props.value)}
            >
              <img draggable="false" src="/icon/cs.png" alt="" />
              <span>Cerrar Sesion</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarL;
