import style from "../styles/NavBar.module.scss";

function NavBar(props: any) {
  return (
    <>
      <nav>
        <h1>
          Socia<span>Lite</span>
        </h1>
        <ul>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="../Login">Login</a>
          </li>
          <li>
            <a href="../Checkin">Check in</a>
          </li>
        </ul>
      </nav>

      {props.children}
    </>
  );
}

export default NavBar;
