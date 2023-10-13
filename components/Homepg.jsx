import React from "react";
import VerticalNav from "./VerticalNav";
import Image from "next/image";

const Homepg = () => {
  const usage = [
    {
      img: "",
      link: "#",
      head: "12-10-2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita",
    },
  ];

  const data = [
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita veritatis nihil quos inventore, soluta quo ullam! Praesentium, eveniet alias atque et quam veritatis aliquid!",
    },
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita veritatis nihil quos inventore, soluta quo ullam! Praesentium, eveniet alias atque et quam veritatis aliquid!",
    },
    {
      date: "12-10-2023",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente debitis error excepturi dolore expedita veritatis nihil quos inventore, soluta quo ullam! Praesentium, eveniet alias atque et quam veritatis aliquid!",
    },
  ];
  return (
    <div className="md:mx-6 mx-3 mt-2">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        <VerticalNav />

        <div className="lg:col-span-2">
          <h1 className="font-bold text-xl m-2">Latest Updates</h1>
          <div className="grid md:grid-cols-2 gap-3">
            {data.map((values, index) => (
              <div key={index} className="rounded-md">
                <a
                  href="#"
                  className="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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

          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  How to Use
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Awareness Videos
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Brochures
                </a>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-2 mt-3">
            {usage.map((values, index) => (
              <a
                key={index}
                href={values.link}
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={values.img}
                  height={10}
                  width={10}
                  alt=""
                />
                <div class="flex flex-col justify-between p-2 leading-normal">
                  <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {values.head}
                  </h5>
                  <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    {values.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepg;
