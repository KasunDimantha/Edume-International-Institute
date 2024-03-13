import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Admin_navbar from "./component/Admin_navbar";

function LoadAllStudent () {

    const handleButtonClick = () => {
        // Handle button click logic here
        console.log('Button clicked!');
      };

    const data = [
        { id: 1, name: 'John Doe', username:'Jhon', password: '1234', contact:'437126328', delete:'delete'  },
        { id: 2, name: 'Jane Doe' },
        // Add more data as needed
      ];
  
    return (
    <>

    <div className=" min-h-screen d-flex">

        <Admin_navbar/>

        <div className=" justify-around w-full">

            <div className="bg-gray-300 p-3">
                <h1 className="font-semibold text-xl text-center">All Students</h1>
            </div>

            <div class="">

                {/* Add button to link addStudent page */}
                <div className="m-3 pr-16 flex justify-end ">
                <button onClick={() => (window.location.pathname = "/signUp")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Add Students
                </button>
                <button class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  hover:bg-blue-500">
                    Update
                </button>
                </div>

                <label class="relative block p-4 w-80">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>

                {/* add table to load All students*/}
                <table className=" bg-white border border-gray-300 m-5 w-11/12">
                <thead>
                    <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Username</th>
                    <th className="py-2 px-4 border-b">Course</th>
                    <th className="py-2 px-4 border-b">Start Date</th>
                    <th className="py-2 px-4 border-b">Contact Number</th>
                    <th className="py-2 px-4 border-b">Remove Student</th>
                
                    {/* Add more header columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                    <tr key={row.id}>
                        <td className="py-2 px-4 border-b">{row.id}</td>
                        <td className="py-2 px-4 border-b">{row.name}</td>
                        <td className="py-2 px-4 border-b">{row.username}</td>
                        <td className="py-2 px-4 border-b">{row.password}</td>
                        <td className="py-2 px-4 border-b">{row.contact}</td>
                        {/* <td className="py-2 px-4 border-b border border-gray-300">{row.delete}
                            <Button onClick={handleButtonClick} label="Click me" />
                        </td> */}
                        {/* Add more columns as needed */}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

        </div>
        </div>

        </>

    )
  
}

export default LoadAllStudent;