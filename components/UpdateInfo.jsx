import React from "react";

const UpdateInfo = () => {
  const data = [
    {
      link: "#",
    },
  ];
  return (
    <div>
      {data.map((values, index) => (
        <div key={index}>
          <a href={values.link}>
            <h1>Hello</h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UpdateInfo;
