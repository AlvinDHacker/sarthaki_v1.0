"use client";
import React, { useState } from "react";
import Image from "next/image";

const Homepg = () => {
  const usage = [
    {
      img: "/img/plant.jpg",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita",
    },
    {
      img: "/img/plant.jpg",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita",
    },
  ];

  const vids = [
    {
      img: "/img/video.png",
      link: "https://www.youtube.com/",
    },
    {
      img: "/img/video.png",
      link: "https://www.youtube.com/",
    },
  ];

  const broc = [
    {
      img: "/img/plant.jpg",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis expedita",
    },
    {
      img: "/img/plant.jpg",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita",
    },
    {
      img: "/img/plant.jpg",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita",
    },
  ];

  const data = [
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing error excepturi dolore expedita veritatis nihil quos inventore, soluta quo ullam! Praesentium, eveniet alias atque et quam veritatis aliquid!",
    },
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing error excepturi dolore expedita veritatis nihil quo, eveniet alias atque et quam veritatis aliquid!",
    },
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita veritatis nihil quos inventore, soluta quo ullam! Praesentium, eveniet alias atque et quam veritatis aliquid!",
    },
  ];

  const [toggletab, setToggletab] = useState(1);

  const toggle = (index) => {
    setToggletab(index);
  };
  return (
    <div className="lg:col-span-2">
      <h1 className="font-bold text-xl m-2">Latest Updates</h1>
      <div className="grid md:grid-cols-2 gap-3">
        {data.map((values, index) => (
          <div key={index} className="rounded-md">
            <a
              href="#"
              className="block p-4 h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {values.date}
              </h5>
              <p className="font-normal text-gray-700 text-sm dark:text-gray-400">
                {values.info}
              </p>
            </a>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-xl mt-3 m-2">Things to Know</h1>

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={
                toggletab === 1
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => toggle(1)}
            >
              How to Use
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                toggletab === 2
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => toggle(2)}
            >
              Awareness Videos
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                toggletab === 3
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => toggle(3)}
            >
              Brochures
            </button>
          </li>
        </ul>
      </div>

      <div className={toggletab === 1 ? "block" : "hidden"}>
        <div className="grid md:grid-cols-2 gap-2 mt-3">
          {usage.map((values, index) => (
            <a
              key={index}
              href={values.link}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="rounded-l-lg h-full w-48"
                src={values.img}
                height={10}
                width={10}
                alt=""
              />
              <div className="flex flex-col justify-between p-2 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {values.head}
                </h5>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  {values.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={toggletab === 2 ? "block" : "hidden"}>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mt-3">
          {vids.map((values, index) => (
            <a
              key={index}
              href={values.link}
              className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="rounded-t-lg md:rounded-l-lg"
                src={values.img}
                height={100}
                width={165}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>

      <div className={toggletab === 3 ? "block" : "hidden"}>
        <div className="grid md:grid-cols-3 gap-2 mt-3">
          {broc.map((values, index) => (
            <a
              key={index}
              href={values.link}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg"
                src={values.img}
                height={10}
                width={10}
                alt=""
              />
              <div className="flex flex-col justify-between p-2 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {values.head}
                </h5>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  {values.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepg;
