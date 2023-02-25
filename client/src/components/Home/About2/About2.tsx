import { useRef, useEffect } from "react";
import style from "@/styles/About/About2.module.scss";
// import { addObserver } from "../observer";

const view = (entrada: any) => {
  if (entrada[0].isIntersecting) entrada[0].target.removeAttribute("class");
};

const addObserver = (ref: any) => {
  const observador = new IntersectionObserver(view, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.7,
  });
  observador.observe(ref);
};

function About2() {
  useEffect(() => {
    const div = document.getElementById("div");
    const img = document.getElementById("img");
    addObserver(div);
    addObserver(img);
  }, []);

  return (
    <div className={style.about2}>
      <div id="div" className={style.div}>
        <h1>Chatea y conoce gente Nueva</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          maiores ullam, hic id rem cumque a perferendis sapiente quaerat ipsa
          eum, iure pariatur eveniet fugit veniam similique accusamus vero saepe
          consequuntur alias. Ducimus aut temporibus aliquam alias odit
          consequatur tempore perspiciatis, perferendis earum eligendi impedit
          sequi distinctio non sapiente, repellat nemo fuga nam voluptatum,
          magni excepturi? Perspiciatis voluptatum nisi minus, repellendus
          dignissimos excepturi maxime quibusdam similique amet deserunt quo
          sequi veniam, at tempora quis dicta obcaecati iure aliquam natus
          asperiores aut id quos! Sit odit, dolores totam asperiores nam
          molestiae.
        </p>
      </div>
      <img className={style.img} id="img" src="/logo-sinfondo.png" alt="" />
    </div>
  );
}

export default About2;
