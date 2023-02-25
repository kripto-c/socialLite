import { useEffect } from "react";
import style from "@/styles/About/About3.module.scss";

const view = (entrada: any) => {
  if (entrada[0].isIntersecting)
    entrada[0].target.setAttribute("class", style[entrada[0].target.id]);
  // console.log("WIDHAWOIDn");
};

const addObserver = (ref: any) => {
  const observador = new IntersectionObserver(view, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.7,
  });
  observador.observe(ref);
};

function About3() {
  useEffect(() => {
    const div = document.getElementById("divA3");
    const img = document.getElementById("imgA3");
    addObserver(div);
    addObserver(img);
  }, []);
  return (
    <div className={style.About3}>
      <span className={style.back}></span>
      <img id="imgA3" src="/userP.png" alt="img adv" />
      <div id="divA3">
        <h1>Problemas con un usuario?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quas
          exercitationem quae velit amet est obcaecati inventore quisquam
          voluptatibus mollitia. Autem, inventore? Eligendi totam natus harum
          qui fuga unde, deleniti mollitia iure aliquam quo vitae, asperiores
          molestias tempore! Magnam, obcaecati perferendis modi numquam
          praesentium debitis laborum dicta error. Deserunt eligendi similique
          ea fuga. Molestiae asperiores adipisci sequi dignissimos commodi odit.
        </p>
        <div className={style.ul}>
          <ul>
            <p>Motivos de baneo</p>
            <li>- Insulto</li>
            <li>- Discriminacion</li>
            <li>- Msg +18</li>
            <li>- Amenazas</li>
          </ul>
          <ul>
            <p>Para quirar el baneo</p>
            <li>- Disculparse con la persona afectada</li>
            <li>- Haber transcurrido 10 dias de baneo</li>
            <li>- Contactar con el moderador</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About3;
