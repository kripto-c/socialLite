import style from "@/styles/nav/Navbar.module.scss";

function NavBar(props: any) {
  return (
    <>
      <nav className={style.nav}>
        <h1>
          <b>
            Socia<span>Lite</span>
          </b>
        </h1>
        <ul>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="../Login">Sign Up</a>
          </li>
          <li>
            <a href="../Checkin">Log in</a>
          </li>
        </ul>
      </nav>

      {props.children}
    </>
  );
}

export default NavBar;
