import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin_navbar from "./component/Admin_navbar";
import axios from "axios";

function AddCourses () {

    const [course, setCourse] = useState({
        courseName: "",
        details: "",
        duration: "",
        fee: "",
        content: "",
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
                courseName: "",
                details: "",
                duration: "",
                fee: "",
                content: "",
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
            <button class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  hover:bg-blue-500">
                Update
            </button>
            </div>

            {/* add form */}
            <form onSubmit={handleSubmit}  className="border-2 m-20 p-10 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="courseName" value={course.courseName} onChange={handleChange} id="courseName" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Details</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                    
                            <textarea className="details" name="details" id="details" value={course.details} onChange={handleChange}  class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="1234"></textarea>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="content" class="block text-sm font-medium leading-6 text-gray-900">Course Content</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                    
                                <textarea className="content" name="content" id="content" value={course.content} onChange={handleChange}  class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="1234"></textarea>
                            </div>
                        </div>
                        </div>
                    

                        {/* <div class="col-span-full">
                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        </div> */}

                        {/* <div class="col-span-full">
                       
                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div class="text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                            </svg>
                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only"></input>
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    </div>

                    <div class="border-b border-gray-900/10 pb-12">
                    
                    
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Duration</label>
                        <div class="mt-2">
                            <input type="text" name="duration" id="duration" value={course.duration} onChange={handleChange}  class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div>

                        <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Course fee</label>
                        <div class="mt-2">
                            <input type="text" name="fee" id="fee" value={course.fee} onChange={handleChange}  class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div>

                       

                        {/* <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                        <div class="mt-2">
                            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Male</option>
                            <option>Female</option>                      
                            </select>
                        </div>
                        </div>

                        <div class="col-span-full">
                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div class="mt-2">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div> */}

                        {/* <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div class="mt-2">
                            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div>

                        <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div class="mt-2">
                            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div>

                        <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div class="mt-2">
                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        </div> */}
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

export default AddCourses;
