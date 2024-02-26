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

          <div onClick={() => (window.location.pathname = "/announcements")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Announcements and Updates</div>

          <div onClick={() => (window.location.pathname = "/events")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Upcoming Events</div>

          <div onClick={() => (window.location.pathname = "/achievements")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Achievements and Certifications</div>

          <div onClick={() => (window.location.pathname = "/courses")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Recomended Courses
          </div>

          <div onClick={() => (window.location.pathname = "/")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Explore New Courses</div>

          <div onClick={() => (window.location.pathname = "/")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          My enrolled Courses</div>

          <div onClick={() => (window.location.pathname = "/messages")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Messages and Notices</div>

          <div onClick={() => (window.location.pathname = "/manage_profiles")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Manage My Profile</div>

          <div onClick={() => (window.location.pathname = "/contact")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          Contact Student Support</div>

          <div onClick={() => (window.location.pathname = "/courses")} className="border-double border-4 border-zinc-400 m-18 h-14 rounded-md p-2 hover:bg-blue-900 hover:text-white">
          FAQ</div>
        </div>

      </div>
      
      
      )
    
  }
  
  export default Student_Dashboard;