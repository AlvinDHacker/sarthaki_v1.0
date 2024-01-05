import React from "react";
import data from '../data/knowledge'

const UpdateInfo = (props) => {
  return (
    <>
      {/* {
      document.addEventListener('keyup', (e) => {
        navigator.clipboard.writeText('');
        alert('Screenshot Disabled')
      })
    } */}
      <div className="select-none">
        {
          data.map((item, index) => {
            return (
              <div key={index} className={props.homeStat === item.id + 1 ? "block" : "hidden"}>
                <div className="lg:col-span-2 mt-5 m-2">
                  <h1 className="font-bold text-xl ">{item.title}</h1>
                  <h2 className="font-bold text-lg py-2 ">{item.subtitle}</h2>
                  <h4 className="font-semibold ">What is Accounting?</h4>
                  <p className="text-gray-500">
                    It is a systematic process of identifying, recording, measuring,
                    classifying, verifying,summarizing, interpreting and communicating
                    financial information about economic entities
                  </p>
                  <p className="text-gray-500">
                    Accounting is also called as the “language of business”
                  </p>
                  <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
                    It provides information on the:-
                  </p>
                  <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Resources available to the entity</li>
                    <li>The means employed to finance those resources</li>
                    <li>The results achieved through their use</li>
                  </ol>
                  <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
                    Functions of accounting
                  </p>
                  <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                      Preparing and/ or collecting financial information & related
                      records & documents.
                    </li>
                    <li>Rearranging and classifying such financial information</li>
                    <li>
                      Generating & sharing information summaries & reportsfrom such
                      financial information.
                    </li>
                    <li>
                      Establishing controlsto ensure integrity of such financial
                      information.
                    </li>
                  </ol>
                  <h4>What is an “Account”?</h4>
                  <p className="text-gray-500">
                    A systematic and summarized record of business transactionsis known
                    as an “Account”
                    <br /> It lists transactionsfalling undersame description/ nature
                    for a given period of time. <br /> It lists transactionsfalling
                    undersame description/ nature for a given period of time.
                  </p>
                </div>
              </div>
            )
          })
        }
        {/* <h4 className="font-semibold ">{item.heading1}</h4>
        <p className="text-gray-500">
          {item.para1}
        </p>
        <p className="text-gray-500">
          {item.para2}
        </p>
        <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
          {item.para3}
        </p>
        <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>{item.list1}</li>
          <li>{item.list2}</li>
          <li>{item.list3}</li>
        </ol>
        <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
          {item.para4}
        </p>
        <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>{item.list4}</li>
          <li>{item.list5}</li>
          <li>{item.list6}</li>
          <li>{item.list7}</li>
        </ol>
        <h4>{item.heading2}</h4>
        <p className="text-gray-500">
          {item.para5}
        </p>
        <p className="text-gray-500">
          {item.para6}
        </p>
        <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
          {item.para7}
        </p>
        <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>{item.list8}</li>
          <li>{item.list9}</li>
          <li>{item.list10}</li>
        </ol>
        <p className="mt-2 text-medium font-semibold text-gray-900 dark:text-white">
          {item.para8}
        </p>
        <ol className="mb-2 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>{item.list11}</li>
          <li>{item.list12}</li>
          <li>{item.list13}</li>
          <li>{item.list14}</li>
        </ol> */}
      </div>
    </>
  );
};

export default UpdateInfo;
