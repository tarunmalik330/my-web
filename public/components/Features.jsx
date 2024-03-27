"use client";
import Image from "next/image";
import musicImg from "../assets/images/music.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { DisPrevBtn, DisNextBtn } from "./Icons";

export default function Features() {
  const slider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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

  const arr1 = [
    {
      head: "slider 1",
      Image: musicImg,
      slide: slider,
    },
    {
      head: "slider 2",
      Image: musicImg,
      slide: slider1,
    },
    {
      head: "slider 3",
      Image: musicImg,
      slide: slider2,
    },
    {
      head: "slider 4",
      Image: musicImg,
      slide: slider3,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row justify-between">
          {carddata.map((a, index) => (
            <div key={index} className=" col-5 mt-45 ">
              <div className="loading-box">
                <div className="music-card justify-center align-items-center d-flex flex-column">
                  <Image src={a.Image} alt="music" className="mw-700 w-100 object-cover" />
                  <h1>{a.heading}</h1>
                  <h3 className="my-0">{a.content}</h3>
                  <p className="mw-900 text-center">{a.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {arr1.map((e, index) => {
          return (
            <>
              <div id={index}>
                <div className="mt-45">
                  <Slider ref={e.slide} {...settings}>
                    <div>
                      <h1>{e.head}</h1>
                      <Image src={e.Image} alt="music" className="w-100" />
                    </div>
                    <div>
                      <h1>{e.head}</h1>
                      <Image src={e.Image} alt="music" className="w-100" />
                    </div>
                    <div>
                      <h1>{e.head}</h1>
                      <Image src={e.Image} alt="music" className="w-100" />
                    </div>
                  </Slider>

                  <button
                    onClick={() => e.slide?.current?.slickPrev()}
                    className="pos_rel"
                  >
                    {" "}
                    <DisPrevBtn />
                  </button>
                  <button
                    onClick={() => e.slide?.current?.slickNext()}
                    className="pos_rel"
                  >
                    {" "}
                    <DisNextBtn />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
