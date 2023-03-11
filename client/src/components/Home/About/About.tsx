import style from "@/styles/About/About.module.scss";

function About() {
  return (
    <div className={style.About}>
      <span className={style.back}></span>
      <img src="/msg2.png" alt="MSG Logo" />
      <div>
        <h1 className={style.titleA1}>
          <b>
            Socia<span>Lite</span> - Web Social
          </b>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maiores
          repellendus fugiat, ad cupiditate dolor iusto est quod facilis
          delectus? Inventore, voluptates ipsa voluptatibus, voluptas
          necessitatibus numquam iusto voluptatem quae mollitia nostrum,
          praesentium pariatur assumenda officiis itaque sunt magni distinctio?
          Est, quae. Asperiores rerum accusamus illum nemo ipsa ea at facilis,
          hic consequatur iste temporibus est nulla velit incidunt iusto
          voluptates ipsam, vitae possimus delectus magni animi vel qui
          repellendus? Mollitia eligendi, minima cupiditate nam assumenda harum
          esse? Quibusdam dolorem, laboriosam rem maiores quos laudantium
          commodi voluptatem voluptate quidem cupiditate?
        </p>
      </div>
    </div>
  );
}

export default About;
