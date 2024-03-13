import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin_navbar from "./component/Admin_navbar";
import axios from "axios";

function Semester () {

    const [semester, setSemester] = useState({
        semID: "",
        semName: "",
        date: "",
        semEnroll: "",
       
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevSemester) => ({
          ...prevSemester,
          [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(semester);

        try {
            const response = await axios.post('http://localhost:3002/semester', semester);
            
            console.log(response.data);
      
            // Reset the form after successful submission
            setSemester({
                semID: "",
                semName: "",
                date: "",
                semEnroll: "",
            });
          } catch (error) {
            // Handle errors if the POST request fails
            console.error('Error submitting data:', error);
          }

    }

  
    return (   
      
      <div className="min-h-screen d-flex">

        <Admin_navbar/>

        <div className=" justify-around w-full">
            
            <div className="bg-gray-300 p-3 flex justify-between">
            <h1 className="font-semibold text-2xl">Courses</h1>
            
            </div>

            <div className="m-3 pr-16 flex justify-end ">
            <button onClick={() => (window.location.pathname = "/loadAllCourses")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                All Courses
            </button>

            <button onClick={() => (window.location.pathname = "/")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Update
            </button>
            
            <button onClick={() => (window.location.pathname = "/addCourse")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Add New Course
            </button>

            <button onClick={() => (window.location.pathname = "/module")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Add New Module
            </button>
            
            </div>

            {/* add form */}
            <form onSubmit={handleSubmit}  className="border-2 m-20 p-10 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Semester Details</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div class="sm:col-span-4">
                            <label for="courseID" class="block text-sm font-medium leading-6 text-gray-900">Course ID</label>
                            <div class="mt-2">
                                <select id="courseID" name="courseID"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">                            
                                <option>1</option>
                                <option>No</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="semID" class="block text-sm font-medium leading-6 text-gray-900">Semester ID</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="semID" value={semester.semID} onChange={handleChange} id="semName" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="semName" class="block text-sm font-medium leading-6 text-gray-900">Semester Name</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="semName" value={semester.semName} onChange={handleChange} id="semName" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date</label>
                            <div class="mt-2">
                                <input type="Date" name="date" id="date" value={semester.date} onChange={handleChange}  class="block w-full rounded-md py-1.5 pl-3 text-gray-900 border-2 border-slate-300 shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="semEnroll" class="block text-sm font-medium leading-6 text-gray-900">Semester Enroll</label>
                            <div class="mt-2">
                                <select id="semEnroll" name="semEnroll"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">                            
                                <option>Yes</option>
                                <option>No</option>
                                </select>
                            </div>
                        </div>
                    
                    </div>
                    </div>


                    </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
                </form>

                </div>


        </div>
       
    )
  
}

export default Semester;
