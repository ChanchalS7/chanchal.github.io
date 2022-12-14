import React from "react";
import GitHubCalendar from "react-github-calendar";
const GitHub = () => {
  

  return (
    <div  name="skill"
    className="bg-slate-100	 w-full h-100%  experience">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full h-full text-black">
            <div className="mt-40">
              <p className="text-4xl  text-blue-600 font-bold mt-40 border-b-4 border-gray-500 p-2 inline">
               Github Calender
              </p>
             
            </div>
            <div className="mt-20">
        <GitHubCalendar
          username="ChanchalS7"
          year={new Date().getFullYear()}
        />
        </div>
        </div>
      
    </div>
  );
};

export default GitHub;