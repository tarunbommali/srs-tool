import React from "react";
import { TEXT_BOOKS, REFRENCE_BOOKS } from "../utils/constants";
import { MdFileDownloadDone } from "react-icons/md";

const BooksList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Textbooks Section */}
        <h2 className="text-xl font-bold text-[#162458] mb-4 underline">
          Textbooks
        </h2>
        <ul className="flex flex-wrap list-disc mb-4">
          {TEXT_BOOKS.map((book, index) => (
            <li
              key={index}
              className="flex flex-col items-center w-[250px] mx-2 my-1 p-2 border rounded-sm bg-slate-50 relative"
            >
              {/* Tooltip Wrapper */}
              <div className="group relative">
                <img
                  className="w-[200px] h-[200px] cursor-pointer"
                  src={book.img_url}
                  alt={book.title}
                />
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-900 text-white text-sm rounded-lg p-2 shadow-lg"
                  style={{ whiteSpace: "normal", width: "200px" }}
                >
                  <p>
                    <strong>Title:</strong> {book.title}
                  </p>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                </div>
              </div>
              <p className="text-center w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mt-2">
                {book.title}
              </p>
              <button
                type="button"
                className="flex items-center justify-center bg-[#162458] text-white rounded-md my-2 py-2 w-full"
              >
                <MdFileDownloadDone className="mx-2" />
                Download
              </button>
            </li>
          ))}
        </ul>

        {/* Reference Books Section */}
        <h2 className="text-xl font-bold text-[#162458] mb-4 underline">
          Reference Books
        </h2>
        <ul className="flex flex-wrap list-disc">
          {REFRENCE_BOOKS.map((book, index) => (
            <li
              key={index}
              className="flex flex-col items-center w-[250px] mx-2 my-1 p-2 border rounded-sm bg-slate-50 relative"
            >
              {/* Tooltip Wrapper */}
              <div className="group relative">
                <img
                  className="w-[200px] h-[200px] cursor-pointer"
                  src={book.img_url}
                  alt={book.title}
                />
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-900 text-white text-sm rounded-lg p-2 shadow-lg"
                  style={{ whiteSpace: "normal", width: "200px" }}
                >
                  <p>
                    <strong>Title:</strong> {book.title}
                  </p>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                </div>
              </div>
              <p className="text-center w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mt-2">
                {book.title}
              </p>
              <button
                type="button"
                className="flex items-center justify-center bg-[#162458] text-white rounded-md my-2 py-2 w-full"
              >
                <MdFileDownloadDone className="mx-2" />
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksList;
