import React from "react";

const UpdateInfo = (props) => {
  return (
    <div>
      <div className={props.homeStat === 2 ? "block" : "hidden"}>
        <div className="lg:col-span-2 mt-5 m-2">
          <h1 className="font-bold text-xl ">Accounting</h1>
          <h2 className="font-bold text-lg py-2 ">Foundational Accounting</h2>
          <h4 className="font-semibold ">What is Accounting?</h4>
          <p>
            It is a systematic process of identifying, recording, measuring,
            classifying, verifying,summarizing, interpreting and communicating
            financial information about economic entities
          </p>
          <p>Accounting is also called as the “language of business”</p>
          <p className="mb-2 text-medium font-semibold text-gray-900 dark:text-white">
            {" "}
            It provides information on the:-{" "}
          </p>
          <ol className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Resources available to the entity</li>
            <li>The means employed to finance those resources</li>
            <li>The results achieved through their use</li>
          </ol>
          <p className="mb-2 text-medium font-semibold text-gray-900 dark:text-white">
            Functions of accounting
          </p>
          <ol className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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
          <p>
            A systematic and summarized record of business transactionsis known
            as an “Account”
            <br /> It lists transactionsfalling undersame description/ nature
            for a given period of time. <br /> It lists transactionsfalling
            undersame description/ nature for a given period of time.
          </p>
        </div>
      </div>

      <div className={props.homeStat === 3 ? "block" : "hidden"}>
        Accounting Concepts
      </div>

      <div className={props.homeStat === 4 ? "block" : "hidden"}>
        Accounting Conventions
      </div>
    </div>
  );
};

export default UpdateInfo;
