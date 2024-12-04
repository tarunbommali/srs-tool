import React from "react";
import { TEXT_BOOKS, REFRENCE_BOOKS } from "../utils/constants";
import { MdFileDownloadDone } from "react-icons/md";

const BooksList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-[#162458] mb-4 underline">
          Textbooks
        </h2>
        <ul className="flex flex-wrap list-disc mb-4">
          {TEXT_BOOKS.map((book, index) => (
            <li
              key={index}
              className="flex flex-col  justify-center items-center w-[300px] mx-2 my-1 p-2 b-[#d5dbdb] border rounded-sm bg-slate-50"
            >
              <img className="w-[200px] h-[200px]" src={book.img_url} alt={book.title} />
              <p className="text-center">{book.title}</p>
              
              <button type="button" className="flex items-center text-center justify-center bg-[#162458] text-white rounded-md my-2 py-2 w-full"><MdFileDownloadDone className="mx-2"/>Download</button>
            </li>
          ))}
        </ul>
        <br />
        <h2 className="text-xl font-bold mb-4  text-[#162458] underline">
          Reference Books
        </h2>
        <ul className="flex flex-wrap list-disc ">
          {REFRENCE_BOOKS.map((book, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center flex-wrap w-[300px] mx-2 my-1 p-2 b-[#d5dbdb] border rounded-sm bg-slate-50"
            >
              <img className="w-[200px] h-[200px]" src={book.img_url} alt={book.title} />
              <p className="text-center">{book.title} </p>
              <button type="button" className="flex  items-center text-center justify-center bg-[#162458] text-white rounded-md my-2 py-2 w-full"><MdFileDownloadDone className="mx-2"/>Download</button>
            </li>
          ))}
        </ul>
        <br />

        <h2 className="text-xl font-bold mb-4 text-[#162458] underline">
          CO's
        </h2>
        <ul className="list-disc">
          <li className=" mx-2 p-2">
            <strong>CO1:</strong> Understand SRS documents, test cases, software
            configuration management, and risk management documents.
          </li>
          <li className=" mx-2 p-2">
            <strong>CO2:</strong> Learn methods for capturing, specifying,
            visualizing, and analyzing software requirements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BooksList;
