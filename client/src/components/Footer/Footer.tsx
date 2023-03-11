import style from "@/styles/footer/footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <ul>
        <li>Opcion 1</li>
        <li>opcion 2</li>
        <li>opcion 3</li>
      </ul>
      <ul>
        <li>opcion 4</li>
        <li>opcion 5</li>
        <li>opcion 6</li>
      </ul>
      <ul>
        <li>opcion 7</li>
        <li>opcion 8</li>
        <div>
          <img src="/linkedin.png" alt="linkedin" width={30} height={30} />
          <img src="/github.png" alt="github" width={30} height={30} />
        </div>
      </ul>
    </div>
  );
}

export default Footer;
