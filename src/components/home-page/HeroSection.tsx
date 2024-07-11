import Image from "next/image";
import React from "react";
import HandBag from "@/src/images/hero-hand-bag.png";
import MyBag from "@/src/images/main-bag.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { Button } from "@/components/ui/button";

type Props = {};


const HeroSectionData = [
  {
    title:"hand bag",
    imageUrl:HandBag
  },
 
]

const HeroSection = (props: Props) => {
  return (
    <div className=" container   w-full mx-auto mt-24 grid grid-cols-12 justify-items-end   relative ">
      <section className="left col-span-6  place-items-end ">
        <div className="flex -mb-20  ml-20 ">
          <div>
            <h3 className="text-sm font-bold text-gray-900 ">
              Geneuine Leather{" "}
            </h3>
            <p className=" w-32 text-xs text-start">
              There are many variations of books Lorem, ipsum dolor sit amet c
            </p>
          </div>

          <div className="w-[3px]  h-40 border-l-2 bg-black "></div>
        </div>



        <div className="  w-fit px-4 relative   border-black  ">
          <Image
            src={MyBag}
            alt="bag"
            height={200}
           width={600}
            className="normal"
          />
          <Image
            src={HandBag}
            alt="hand-bag"
            className="rounded-xl w-32 h-32 absolute bottom-0 left-32"
          />

          <div className="rounded-full bg-[#f9e9e7] h-40 w-40 absolute  right-0 top-[40%]   ">
            <div className="rounded-full bg-[#282828] h-20 w-20 absolute hero-circle ">
              <FaArrowRightLong className="text-white   text-3xl absolute hero-circle" />
            </div>
          </div>
        </div>
        <div className="     flex justify-end">
          <p className="  text-sm  w-44 space-x-10 ">
            There are many variations of books Lorem, ipsum dolor sit amet
          </p>
        </div>
      </section>
      <section className="right col-span-6">
        <h1 className="text-7xl font-bold w-11/12 ">Choose your daily Stuff</h1>
        <div className="ml-48">
          <div className="text-2xl font-medium flex  flex-col ">
            <p>Each piece is designed to move with you</p>
            <u>to move with you</u>
          </div>

          <div className="flex items-center gap-2 py-10">
            <Button>shop now</Button>
            <button className="flex items-center">
              <IoPlay />
              <p>Watch Video</p>
            </button>
          </div>

          <div className="flex items-center">
            <p>Try Now</p>
            <span>----------></span>
          </div>
          <div className="   ">
           {HeroSectionData.map((item,index)=>{
            return (
              <div key={index} className="max-w-56">
                 <div  className="h-8 bg-[#CE4500] flex justify-between pt-1 px-2 rounded-t-xl text-white text-xs">
                  <p >{item.title}</p>
                  <FaArrowRightLong />
                 </div>
                 <Image src = {item.imageUrl} alt={item.title} className="rounded-xl -mt-2 h-56 w-72" />
              </div>
            )
           })}
             
             
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
