import React, { useState } from "react";
import Admin_navbar from "./component/Admin_navbar";


function Admin_Dashboard () {
 
    return (

    <>
    
    <div className="container min-h-screen">

    <div><Admin_navbar/></div>

            <div className="">
            
            <div className="bg-gray-300 p-3">
                <h1 className="font-semibold text-xl text-center">Admin Dashboard</h1>
            </div>
            
            <div class="">

                <h1 className='font-bold text-lg p-5'>Overview</h1>

                <div className="flex justify-around">

                <div class="...">
                    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <img src='/src/pages/component/img/student copy.png' width={60}></img>
                        <label className='studentLbl'><h3 class="text-slate-900 dark:text-white mt-3 font-semibold text-lg tracking-tight">250</h3></label>
                        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            Total Student
                        </p>
                    </div>
                </div>

                <div class="...">
                    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <img src='/src/pages/component/img/presentation.png' width={60}></img>
                        <label className='lecturerLbl'><h3 class="text-slate-900 dark:text-white mt-3 font-semibold text-lg tracking-tight">250</h3></label>
                        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            Total Lecturers
                        </p>
                    </div>
                </div>

                <div class="...">
                    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <img src='/src/pages/component/img/online-learning.png' width={60}></img>
                        <label className='courseLbl'><h3 class="text-slate-900 dark:text-white mt-3 font-semibold text-lg tracking-tight">250</h3></label>
                        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            Total Courses
                        </p>
                    </div>
                </div>

                </div>


            </div>

            </div>
            </div>
            
            </> 
           
    )
  
}

export default Admin_Dashboard;
