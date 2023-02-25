// // import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import vector from "./Images/Vector.png";
import badge from "./Images/badge.png";
import { HiStar } from "react-icons/hi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";

const App = () => {

  const data = {
    "0": [
      {
        display_name: "Public Speaking",
        rating: "4.9;5;117",
        games_count: "5",
        category_name: "Communication",
        original_price: 10000,
        discounted_price: 8000,
        name: "Public Speaking - Learn",
        certificate_count: 1,
        num_classes: 24,
        min_age: 6,
        max_age: 10,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Public Speaking",
        rating: "4.5;5;100",
        games_count: "3",
        category_name: "Communication",
        original_price: 10000,
        discounted_price: 8000,
        name: "Public Speaking - Learn",
        certificate_count: 2,
        num_classes: 20,
        min_age: 11,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
    ],
  };


  const [selected, setSelected] = useState(null);
  const courses = Object.values(data["0"]);
  const [d, setD] = useState(courses);



  const handleSelect = (btn) => {
    if (selected === btn) {
      setSelected(null);
      // setName(null)
    } else {
      setSelected(btn);
    }

    const filtered1 = courses.filter((f) => f.min_age >= 6 && f.max_age <= 10);
    const filtered2 = courses.filter((f) => f.min_age >= 10 && f.max_age <= 15);

    setD(selected === "btn1" ? filtered2 : filtered1);

  };

  return (
    <div>
      <div className="flex justify-center mt-5  mb-14 gap-8">
        <button
          onClick={() => {
            handleSelect("btn1");
          }}
          className={selected === "btn1" ? `bubble outline-none ` : "b2"}
        >
          <span className="text-xl font-bold poppins">Junior</span>
          <br></br> <span className="text-md font-medium">(age 6-10 )</span>{" "}
        </button>
        <button
          onClick={() => {
            handleSelect("btn2");
          }}
          className={selected === "btn2" ? `bubble outline-none ` : "b2"}
        >
          <span className="text-xl font-bold poppins">Senior</span>
          <br></br> <span className="text-md font-medium">(age 10-15 )</span>{" "}
        </button>
      </div>
      <div className="flex justify-center gap-5 max-w-[80%] mx-auto">
        {d.map((course, index) => (
          <div
            key={index}
            className="duration-300  transition ease-in rounded-[4px] hover:-translate-y-[30px] w-[328px] relative bg-[#F8F8F8] shadow-lg m-0 p-0"
          >
            <div className="bg-[#D5F1FE]  group hover:bg-[#003F5C] ">
              <div className="relative  float-right  ">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70 70C60.8075 70 51.7049 68.1894 43.2122 64.6716C34.7194 61.1537 27.0026 55.9976 20.5025 49.4975C14.0024 42.9974 8.84627 35.2806 5.32843 26.7878C1.81061 18.295 0 9.19253 0 0H70V70Z"
                    className="fill-[#3EBEFF] group-hover:fill-[#D5F1FE]"
                  ></path>
                </svg>
                <p className="text-[16px] font-bold lato absolute top-2 left-5 z-10 pl-3">
                  8%<br></br> off
                </p>
              </div>
              <br></br>
  
              <div class="relative">
                <svg
                  width="180"
                  height="30"
                  viewBox="0 0 180 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 30C0.447718 30 0 29.5523 0 29L0 0.999999C0 0.447715 0.447715 -1.43051e-06 1 -1.43051e-06L176.734 -1.43051e-06C177.72 -1.43051e-06 178.111 1.27638 177.294 1.82855L157.478 15.2198C156.867 15.6325 156.898 16.5414 157.534 16.9124L176.8 28.1359C177.682 28.6499 177.318 30 176.297 30L1 30Z"
                    className="fill-[#3EBEFF] group-hover:fill-[#D5F1FE]"
                  ></path>
                </svg>
                <p className="text-[16px] font-bold lato absolute top-1 left-2 group-hover:text-black z-10 pl-3">
                  27 Sessions
                </p>
              </div>
              <div className="p-3">
                <h2 className="text-[20px] font-bold group-hover:text-white poppins text-[#006292]">
                  {course.display_name}
                </h2>
                <div className="flex text-[19px] items-center mt-1 text-[#F9B215]">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar className="text-white" />
                  <p className=" text-[14px] group-hover:text-white text-black -mt-[2px] pl-1">
                    (50 reviews)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-justify px-2 my-4  text-[14px] lato">
                {course.pitch}
              </p>

              <div className="pl-2 lato">
                <p className="font-[16px] font-bold my-2">
                  Students will achieve:
                </p>
                <ul className="flex flex-col gap-2 list-disc ml-5 text-justify pr-3 text-[#666666] text-[14px]">
                  {course.curriculum_outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 text-[#333333] lato font-800">
                <span className="border-b-[1px] border-black ">
                  View Detailed lesson plan
                </span>
              </div>

              <div className="mx-auto max-w-[95%] h-[2px] w-full bg-[#E0E0E0]"></div>
              <div className="flex justify-between px-4 items-start my-3">
                <div>
                  <p className="lato text-[24px] font-bold">
                    ₹ {course.discounted_price}{" "}
                  </p>
                  <p className="lato text-[#999999] line-through">
                    ₹ {course.original_price}
                  </p>
                </div>

                <div>
                  <p className="lato text-[18px] font-bold">
                    ₹ 200{" "}
                    <span className="text-[#666666] font-medium">
                      per class
                    </span>
                  </p>
                </div>
              </div>
              <p className="lato text-center text-[14px] text-[#F47759]">
                We'll schedule the slots as per your convenience
              </p>

              <div className="flex items-center  bg-[#D5F1FE] px-2 py-4  gap-3 my-4">
                <div className="flex items-center gap-2">
                  <WiMoonAltWaxingCrescent5 className="text-xl text-[#F9B215]" />
                  <p className="text-[14px] lato font-semibold text-[#333333]">
                    8 Activities
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={vector} className="w-[20px] h-[20px]" />
                  <p className="text-[14px] lato font-semibold text-[#333333]">
                    {course.games_count} Games
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={badge} className="w-[15px] h-[20px] object-cover" />
                  <p className="text-[14px] lato font-semibold text-[#333333]">
                    {course.certificate_count} Certificate{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <button
                  className=" p-3 px-10 rounded-3xl text-white"
                  style={{
                    background: "rgb(243, 112, 91)",
                    background:
                      "linear-gradient(90deg, rgba(243, 112, 91, 1) 0%, rgba(252, 180, 68, 1) 100%)",
                  }}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      //{" "}
    </div>
    // </div>
  );
};

export default App;
