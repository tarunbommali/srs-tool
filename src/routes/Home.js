import React from "react";
import BooksList from "../components/BooksList";

const Home = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#162458]">
          Welcome to the SRS Document Learning Portal
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        <p>
        Start exploring different aspects of software engineering through
        interactive modules.
      </p>
      </p>
      </header>

      <div>
        <div className="flex justify-center my-2">
          <img
            className="w-[600px] h-[500px]"
            src="https://res.cloudinary.com/drdgj0pch/image/upload/v1733299206/srs__.png"
            alt="srs__"
          />
          <img
            className="w-[350x] h-[500px]"
            src="https://res.cloudinary.com/drdgj0pch/image/upload/v1733299214/srs_.png"
            alt="srs"
          />
        </div>
      </div>

      <BooksList />
      
      
      
    </div>
  );
};

export default Home;
