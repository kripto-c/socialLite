import style from "@/styles/footer/footer2.module.scss";

function Footer2() {
  return (
    <div className={style.footer2}>
      <div className={style.content}>
        <div className={style.titleF}>
          <h4>
            Socia<span>Lite</span>
          </h4>
          <h5>Copyright © 2023 SociaLite. All rights reserved.</h5>
        </div>
        <div className={style.aboutF}>
          <ul>
            <li>Home</li>
            <li>FAQ</li>
            <li>Soporte</li>
            <li>Contactar</li>
            <li>Developers</li>
            <div>
              <img src="/linkedin.png" alt="linkedin" width={30} height={30} />
              <img src="/github.png" alt="github" width={30} height={30} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
