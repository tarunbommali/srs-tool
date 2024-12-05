import React from "react";
import BooksList from "../components/BooksList";
import HeroPage1 from "../components/HeroPage1";
import HeroPage2 from "../components/HeroPage2";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroPage1/>
      <HeroPage2/>
      <BooksList />
    </div>
  );
};

export default Home;
