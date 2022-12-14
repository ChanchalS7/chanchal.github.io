import React from "react";
import HeroImage from "../assets/herotwo.png";
import Type from "./Type";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Chanchal Verma_Resume.pdf"

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: resume,
      download: true,
    }
  ]

  return (
    <div
      name="home"
      className="h-screen w-full bg-slate-200	home"
      
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            style={{marginTop:"80px"}}
          />
        </div>
        <div style={{marginRight:"auto"}} className="flex flex-col justify-center h-full">
          <h5 className="text-3xl sm:text-4xl  text-black">Hello,my name is</h5>
          <h5 className="text-3xl sm:text-6xl font-bold text-black">Chanchal Verma</h5>
          <p className="text-2xl sm:text-4xl font-bold text-blue-600">I'm a 
          <Type/>
          </p>
          <p className="text-black py-4 max-w-md">
            I like to build websites and desgining software.
            I love to work on web application using technologies like
            React, Tailwind  and Redux.
          </p>

          <div className="portfolio-btn">
          <div >
            {links.map(({ child, href, download }) => (                    
                <a
                  href={href}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md hover:scale-105  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... cursor-pointer hover:text-white duration-300 child-underline"
                  download={download}
                >
                  {child}
                </a>     
            ))}
          </div>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
