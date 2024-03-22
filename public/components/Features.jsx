import Image from "next/image";
import musicImg from "../assets/images/music.png";

export default function Features() {
  const carddata = [
    {
      Image: musicImg,
      heading: "hellow",
      content: "i am web developer and you",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur soluta quas quisquam provident voluptas recusandae minus aliquid necessitatibus repellendus laboriosam doloribus voluptatibus, possimus error ea autem hic ratione.",
    },
    {
      Image: musicImg,
      heading: "hellow",
      content: "i am web developer and you",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur soluta quas quisquam provident voluptas recusandae minus aliquid necessitatibus repellendus laboriosam doloribus voluptatibus, possimus error ea autem hic ratione.",
    },
  ];
  return (
    <>
      <div className="bg-danger">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consectetur soluta quas quisquam provident voluptas recusandae minus
          aliquid necessitatibus repellendus laboriosam doloribus voluptatibus,
          possimus error ea autem hic ratione. Libero deserunt quasi eveniet
          consectetur natus minima fugit quis at ratione vero repudiandae
          voluptas nulla ut excepturi harum, laborum incidunt. Aliquam, ipsum?
          Autem modi, illo voluptates magni, voluptatem, voluptas quos delectus
          id totam nemo doloribus corrupti iusto! Fugiat, laborum
          necessitatibus? Repudiandae molestias amet qui nisi in quae voluptates
          repellat facere neque. Deleniti excepturi numquam adipisci expedita,
          reprehenderit saepe officia modi unde tenetur quis libero impedit aut
          harum ad. Maxime aut repudiandae dignissimos distinctio? Culpa
          deleniti ut fugiat voluptatem. Fugiat tempora at animi illum
          laboriosam, esse ullam natus enim minus consequatur, dolor cupiditate
          autem repellat voluptatibus corrupti cumque voluptate incidunt
          quibusdam adipisci nam excepturi possimus rerum sunt est! Dolor
          repellat suscipit unde tenetur consequuntur aspernatur quod accusamus.
          Ipsam itaque dignissimos in sed odit laborum placeat ducimus culpa
          repellat. Similique ducimus voluptatem dolor nobis voluptatibus, alias
          quae enim nihil iste ab ipsum obcaecati sequi, corrupti expedita
          voluptatum at hic dicta placeat! Id dolor hic necessitatibus eligendi,
          voluptatum itaque consectetur saepe distinctio possimus nam numquam
          pariatur alias, neque, cum ipsum culpa fuga facere veniam.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {carddata.map((a, index) => (
            <div
              key={index}
              className="d-flex flex-column col-6 justify-center align-items-center mt-45 music-card"
            >
              <Image src={a.Image} alt="music" className="mw-700 w-100" />
              <h1>{a.heading}</h1>
              <h3 className="my-0">{a.content}</h3>
              <p className="mw-900 text-center">{a.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
