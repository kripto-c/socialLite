import style from "@/styles/home/Home.module.scss";

function Info() {
  return (
    <div className={style.info}>
      <div className={style.img}>
        <img src="/chat1.svg" alt="" />
        {/* <img src="/chat1.svg" alt="" /> */}
        {/* <img src="/chatxd.webp" alt="" /> */}
      </div>
    </div>
  );
}

export default Info;
