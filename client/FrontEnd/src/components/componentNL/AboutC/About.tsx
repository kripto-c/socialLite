import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./AboutC.scss";

function AboutC() {
  const info = useRef(null);

  useEffect(() => {
    new Typed(info.current, {
      strings: [
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed delectus
      voluptate, adipisci, incidunt corrupti doloremque omnis dolor ea vel
      fugit vitae numquam explicabo eum! Magni, aspernatur? Iusto nihil
      placeat, sint perspiciatis tenetur corrupti consectetur necessitatibus
      ullam.`,
      ],
      typeSpeed: 1,
      loop: false,
      showCursor: false,
    });
  }, []);
  return (
    <div className="info">
      <div className="about">
        <h1>Pagina de About</h1>
        <p ref={info}></p>
      </div>
      <div className="extra">
        <h3>Aqui va informacion extra xd</h3>
        <img src="/vite.svg" alt="" />
        <button>boton</button>
      </div>
    </div>
  );
}

export default AboutC;
