import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin_navbar from "./component/Admin_navbar";
import axios from "axios";

function AddCourses () {

    const [course, setCourse] = useState({
        courseID: "",
        courseName: "",
        category: "",
        details: "",
        content: "",
        duration: "",
        fee: "",
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
          ...prevCourse,
          [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(course);

        try {
            const response = await axios.post('http://localhost:3002/course', course);
            
            console.log(response.data);
      
            // Reset the form after successful submission
            setCourse({
                courseID: "",
                courseName: "",
                category: "",
                details: "",
                content: "",
                duration: "",
                fee: "",
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
            <button onClick={() => (window.location.pathname = "/loadAllCourses")} className=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                All Courses
            </button>

            <button onClick={() => (window.location.pathname = "/")} className=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                Update
            </button>
        
            
            </div>

            {/* add form */}
            <form onSubmit={handleSubmit}  className="border-2 m-20 p-10 mx-32">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Course Details</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                        <label form="coursename" className="block text-sm font-medium leading-6 text-gray-900">Course ID</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="courseID" value={course.courseID} onChange={handleChange} id="courseName" className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label form="coursename" className="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="courseName" value={course.courseName} onChange={handleChange} id="courseName" className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label form="category" className="block text-sm font-medium leading-6 text-gray-900">Course Category</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                    
                            <textarea name="category" id="category" value={course.category} onChange={handleChange}  className="block flex-1 bg-transparent py-1.5 pl-3 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="more details..."></textarea>
                            </div>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label form="details" className="block text-sm font-medium leading-6 text-gray-900">Course Details</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                    
                                <textarea name="details" id="details" value={course.details} onChange={handleChange}  className="details block flex-1 bg-transparent py-1.5 pl-3 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="more details..."></textarea>
                            </div>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label form="content" className="block text-sm font-medium leading-6 text-gray-900">Course Content</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                    
                                <textarea name="content" id="content" value={course.content} onChange={handleChange}  className="content block flex-1 bg-transparent py-1.5 pl-3 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="more details..."></textarea>
                            </div>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label form="first-name" className="block text-sm font-medium leading-6 text-gray-900">Duration</label>
                            <div className="mt-2">
                                <input type="text" name="duration" id="duration" value={course.duration} onChange={handleChange}  className="block w-full rounded-md py-1.5 pl-3 text-gray-900 border-2 border-slate-300 shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label form="coursefee" className="block text-sm font-medium leading-6 text-gray-900">Course fee</label>
                            <div className="mt-2">
                                <input type="text" name="fee" id="fee" value={course.fee} onChange={handleChange}  className="block w-full rounded-md py-1.5 pl-3 text-gray-900 border-2 border-slate-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>
                    
                    </div>
                    </div>


                    </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
                </form>

                </div>


        </div>
       
    )
  
}

export default AddCourses;
