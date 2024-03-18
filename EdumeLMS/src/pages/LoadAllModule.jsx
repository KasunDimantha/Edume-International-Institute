import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 
import Admin_navbar from "./component/Admin_navbar";


function LoadAllModule() {

   

    const data = [
        { semester: 'sem 1', Date: '2024-03-20' , enroll:'yes'},
        { semester: 'sem 2', Date: '' },
        // Add more data as needed
      ];

      const handleRowClick = (row) => {
        console.log('Clicked row:', row);
        // Perform actions when a row is clicked
        window.location.href = `/Module`;
      };
  
    return (
      
        <div className=" min-h-screen d-flex">

            <Admin_navbar/>

            <div className=" justify-around w-full">
                
                <div className="bg-gray-300 p-3 flex justify-between">
                <h1 className="font-semibold text-2xl">All Modules</h1>
                
                </div>

                {/* Add button to link addStudent page */}
                <div className="m-3 pr-16 flex justify-end ">
                <button onClick={() => (window.location.pathname = "/module")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Add New Module
                </button>
                <button class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  hover:bg-blue-500">
                    Update
                </button>
                </div>

                {/* add table to load All students*/} 
                <table className="w-5/6 bg-white border border-gray-300 m-10">
                <thead>
                    <tr className='bg-emerald-200'>
                    <th className="py-2 px-4 border-b">Module ID</th>
                    <th className="py-2 px-4 border-b"> Module Name</th>
                    <th className="py-2 px-4 border-b"> Lecturer Name</th>
                    
                
                    {/* Add more header columns as needed */}
                    </tr>
                </thead>
                <tbody >
                    {data.map((row) => (
                    <tr key={row.id} onClick={() => handleRowClick(row)} className='cursor-pointer hover:bg-blue-300'>
                        <td className="py-2 px-4 border-b">{row.moduleID}</td>
                        <td className="py-2 px-4 border-b">{row.moduleName}</td>
                        <td className="py-2 px-4 border-b">{row.Lecturer}</td>
                        {/* Add more columns as needed */}
                    </tr>
                    ))}
                </tbody>
                </table>

            </div>

        </div>

    )
  
}

export default  LoadAllModule ;