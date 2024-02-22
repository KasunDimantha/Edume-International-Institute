import React, { useState } from "react";
import studentDashboard from './Student_Dashboard'
import Announcements from './Announcements';
import { Link } from "react-router-dom";

function Student_Dashboard () {

    

  
    return (
        
      <div className=" min-h-screen">

        {/* Add image to topic div */}
        <div className="h-24 text-center p-6 text-2xl bg-student">
          <h1 className="font-bold p-3 text-black"> Welcome to the Student Dashboard </h1>
        </div>

        {/* Add features */}
        <div className="grid gap-4 grid-cols-2 m-20 text-center text-lg font-semibold cursor-pointer">

          <div onClick={() => (window.location.pathname = "/announcements")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-zinc-200 ">
          Announcements and Updates</div>

          <div onClick={() => (window.location.pathname = "/events")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-zinc-200">
          Upcoming Events</div>

          <div onClick={() => (window.location.pathname = "/achievements")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-zinc-200">
          Achievements and Certifications</div>

          <div onClick={() => (window.location.pathname = "/courses")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-zinc-200">
          Recomended Courses
          </div>

          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">Explore New Courses</div>
          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">My enrolled Courses</div>
          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">Messages and Notices</div>
          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">Manage My Profile</div>
          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">Contact Student Support</div>
          <div className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 ">FAQ</div>
        </div>

      </div>
      
      
      )
    
  }
  
  export default Student_Dashboard;