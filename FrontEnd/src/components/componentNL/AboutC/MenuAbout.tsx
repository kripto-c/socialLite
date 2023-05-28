import "./MenuAbout.scss";

function MenuAbout() {
  return (
    <div className="menuAbout">
      <ul>
        <li>
          <img src="/icon/log_icon.png" alt="" />
          <a href="#">Reportar Problema</a>
        </li>
        <li>
          <img src="/icon/log_icon.png" alt="" />
          <a href="#">Preguntas frecuentes</a>
        </li>
        <li>
          <img src="/icon/log_icon.png" alt="" />
          <a href="#">Consulta</a>
        </li>
        <li>
          <img src="/icon/log_icon.png" alt="" />
          <a href="#">Contactos</a>
        </li>
        <li>
          <img src="/icon/log_icon.png" alt="" />
          <a href="#">Visita Nuestra Web</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuAbout;
