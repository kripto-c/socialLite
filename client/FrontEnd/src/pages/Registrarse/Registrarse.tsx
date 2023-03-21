import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import FormRegistro from "../../components/FormRegistro/FormRegistro";
import "./Registrarse.scss";

function Registrarse() {
  const advP = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    new Typed(advP.current, {
      strings: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      animi dolor, itaque distinctio fugiat laboriosam explicabo, aperiam
      repudiandae libero alias natus, aspernatur quibusdam odit impedit
      adipisci qui veniam nisi officia optio obcaecati suscipit enim.
      Maiores, excepturi? Officiis voluptatem dicta veniam unde tempore quis
      adipisci commodi quos ducimus assumenda placeat, facere eaque
      recusandae itaque. Magnam consectetur alias repellendus repudiandae
      facilis odit! Aliquam at commodi voluptatem praesentium qui porro
      incidunt eius sint iusto? Molestiae ea laudantium nemo beatae
      voluptatibus repellat perferendis, voluptatum vero quibusdam
      voluptates eius omnis maiores tempora nisi quo ex! Asperiores unde
      dignissimos sint esse fugit maiores blanditiis neque fugiat saepe
      cupiditate sequi molestias, quae nobis atque, praesentium deleniti et
      sed. Placeat consequuntur, similique vel blanditiis quibusdam odit eum
      illum repudiandae quis quaerat!`,
      ],
      typespead: 400,
      loop: false,
      showCursor: false,
    });
  }, []);
  return (
    <div className="registro">
      <FormRegistro />
      <div className="adv">
        <div className="p">
          <p ref={advP}></p>
        </div>
        <div className="img">
          <img src="/img1.webp" alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
}

export default Registrarse;
