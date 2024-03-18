import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Admin_navbar from "./component/Admin_navbar";

function LoadAllCourses () {

    const Data = [
        {
          id:1,
          title:'Information Technology',
          company:'Edume Institute'      
        }
       
    ]

  
    return (

    <>
      
    <div className="  min-h-screen d-flex">

       <Admin_navbar/>

        <div className=" justify-around w-full">

            <div className="bg-gray-300 p-3">
                <h1 className="font-semibold text-xl text-center">All Courses</h1>
            </div>

                {/* Add button to link addStudent page */}
                <div className="m-3 pr-16 flex justify-end ">
                <button onClick={() => (window.location.pathname = "/addCourse")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Add Courses
                </button>
                <button class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  hover:bg-blue-500">
                    Update
                </button>
                </div>

                
                <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10' >

                {
                Data.map(({id,title,company}) => {
                return(
                
                    <div key={id} className='group group/item singleJob w-[250px] p-[15px] rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:bg-[#3260b5e5] '>
                    
                    <p className='text-md font-bold  pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                    {title}
                    </p>

                    <div className='company flex items-center gap-2'>
                
                        <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{company}</span>
                    </div>

                    <button onClick={() => (window.location.pathname = "/loadAllSemester")} className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor
                    group-hover/item:text-textColor group-hover:text-black'>View Semesters...</button>

                    </div>


                    )
                })
                }


            </div>

                    
        </div>

    </div>

    </>

    )
  
}

export default LoadAllCourses;