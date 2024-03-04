import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

function LoadAllLecturer () {

    const data = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        // Add more data as needed
      ];
  
    return (
      
      <div className="min-h-screen">
            
            <div className="bg-gray-300 p-3 flex justify-between">
            <h1 className="font-semibold text-2xl">Load All Lecturers</h1>
            <Link to="/adminDashboard">
                <img
                src="/src/pages/component/img/home.png"
                className='w-7'
                />
            </Link>
            </div>

            {/* Add button to link addStudent page */}
            <div className="m-3 pr-16 flex justify-end ">
            <button onClick={() => (window.location.pathname = "/addLecturer")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
               Add Lecturer
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
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">Contact Number</th>
               
                {/* Add more header columns as needed */}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id}>
                    <td className="py-2 px-4 border-b">{row.id}</td>
                    <td className="py-2 px-4 border-b">{row.name}</td>
                    {/* Add more columns as needed */}
                </tr>
                ))}
            </tbody>
            </table>

        </div>

    )
  
}

export default  LoadAllLecturer ;