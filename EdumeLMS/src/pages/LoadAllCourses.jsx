import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Admin_navbar from "./component/Admin_navbar";

function LoadAllCourses () {

    const data = [
        { id: 1, name: 'Information Technology' },
        { id: 2, name: 'Buisness' },
        // Add more data as needed
      ];
  
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

                    {/* add table to load All students*/}
                    <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Course Name</th>
                        <th className="py-2 px-4 border-b">Duration</th>
                        <th className="py-2 px-4 border-b">Course fee</th>
                    
                    
                        {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                        <tr key={row.id}>
                            <td className="py-2 px-4 border-b">{row.id}</td>
                            <td className="py-2 px-4 border-b">{row.name}</td>
                            <td className="py-2 px-4 border-b">{row.duration}</td>
                            <td className="py-2 px-4 border-b">{row.fee}</td>
                            {/* Add more columns as needed */}
                        </tr>
                        ))}
                    </tbody>
                    </table>

        </div>

        </div>

        </>

    )
  
}

export default LoadAllCourses;