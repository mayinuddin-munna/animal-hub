'use client'
import "./Animal.css";
import AnimalModal from "../Modal/AnimalModal";
import CategoryModal from "../Modal/CategoryModal";
import Tabs from "../Tabs/Tabs";
import { useEffect } from "react";

const Animal = () => {
  const url = "data.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json)
      .catch((data) => console.log(data));
  }, []);
  
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-baseline justify-between font-mono text-sm lg:flex">
        <div className="fixed gap-5 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="category-cart">Land Animal</div>
          <div className="category-cart">Bird</div>
          <div className="category-cart">Fish</div>
          <div className="category-cart">Insect</div>
        </div>
        <div className="fixed gap-5 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>
            <AnimalModal />
          </div>
          <div>
            <CategoryModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animal;
