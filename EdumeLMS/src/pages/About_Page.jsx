import React, { useState } from "react";



function About_Page () {
 
    return (
        
      <div className="bg-hero min-h-screen relative m-4 rounded-b-xl">
        
        {/* add transparent div */}
        <div className=' bg-gray-400 bg-opacity-60 size-6/12 rounded-br-3xl p-4 left-24 top-20 absolute' >

          <h4 className='text-xl font-bold pb-3 '> About Us</h4>
          
            <p className="text-balance">
              Edume International Institute presents an unparalleled opportunity to delve into cutting-edge technology 
              through our modern courses, curted with expertise and innovation.Elevate your skills with our advanced courses
              featuring robust syllabi and captivating lectures. Our commitment to excellence ensure an enriching educational 
              experience, empowering you with the latest industry insights. Embrace the convenience of online learning as all 
              our lectures are conveniently delivered through digital platforms. At Edume, we are dedicated to fostering a dynamic
              learning environment where you can thrive, staying at the forefront of technological advancements. Seize the chance 
              to explore, grow, and excel in your choosen field with Edume International Institute
            </p>

            <button
            onClick={() => (window.location.pathname = "/courses")}
            class="bg-gray-500 bg-opacity-15 border border-slate-900 hover:bg-white hover:border-white text-black py-2 px-4 rounded right-20 bottom-10 absolute ">Lern more...</button>
          
        </div>

      </div>
      
    )
  
}

export default About_Page;
