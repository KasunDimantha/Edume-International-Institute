import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin_navbar from "./component/Admin_navbar";
import axios from "axios";

function Module () {

    // const [selectedValue, setSelectedValue] = useState('');
    const [options, setOptions] = useState({
       
    });


    const [module, setModule] = useState({
        moduleID: "",
        courseID: "",
        semID: "",
        moduleName: "",
        moduleCategory: "",
        moduleStatus:"",
        moduleCredit: "",
        lecturer: "",
    });

    useEffect(() => {
        // Fetch data from the API endpoint for lecturers
        axios.get('http://localhost:3002/lecturers')
          .then(response => {
            // Set the fetched data to the state
            setOptions(response.data);
          })
          .catch(error => {
            console.error('Error fetching lecturers:', error);
          });
      }, []);

    
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setModule((prevModule) => ({
          ...prevModule,
          [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(module);
        

        try {
            const response = await axios.post('http://localhost:3002/module', module);
            
            console.log(response.data);
      
            // Reset the form after successful submission
            setModule({
                moduleID: "",
                courseID: "",
                semID: "",
                moduleName: "",
                moduleCategory: "",
                moduleStatus:"",
                moduleCredit: "",
                lecturer: "",
            });

            
          } catch (error) {
            // Handle errors if the POST request fails
            console.error('Error submitting data:', error);
          }

    }

  
    return (   
      
      <div className="min-h-screen d-flex ">

        <Admin_navbar/>

        <div className=" justify-around w-full">
            
            <div className="bg-gray-300 p-3 flex justify-between">
            <h1 className="font-semibold text-2xl">Courses</h1>
            
            </div>

            <div className="m-3 pr-16 flex justify-end ">
            <button onClick={() => (window.location.pathname = "/loadAllCourses")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                All Courses
            </button>

            <button onClick={() => (window.location.pathname = "/loadAllModule")} class=" text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-3 hover:bg-blue-500">
                All Modules
            </button>
            
            
            
            </div>

            {/* add form */}
            <form onSubmit={handleSubmit}  className="border-2 m-20 p-10 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Module Details</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div class="sm:col-span-4">
                        <label for="courseID" class="block text-sm font-medium leading-6 text-gray-900">Course ID</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="courseID" readOnly value={module.courseID} onChange={handleChange} id="courseID" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="semID" class="block text-sm font-medium leading-6 text-gray-900">Semester ID</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="semID" readOnly value={module.semID} onChange={handleChange} id="semID" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="moduleID" class="block text-sm font-medium leading-6 text-gray-900">Module ID</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="moduleID" value={module.moduleID} onChange={handleChange} id="moduleID" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>


                        <div class="sm:col-span-4">
                        <label for="moduleName" class="block text-sm font-medium leading-6 text-gray-900">Module Name</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="moduleName" value={module.moduleName} onChange={handleChange} id="moduleName" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="moduleCategory" class="block text-sm font-medium leading-6 text-gray-900">Module Category</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="moduleCategory" value={module.moduleCategory} onChange={handleChange} id="moduleCategory" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="moduleStatus" class="block text-sm font-medium leading-6 text-gray-900">Module Status</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="moduleStatus" value={module.moduleStatus} onChange={handleChange} id="moduleStatus" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>

                        <div class="sm:col-span-4">
                        <label for="moduleCredit" class="block text-sm font-medium leading-6 text-gray-900">Module Credit</label>
                        <div class="mt-2">
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                            <input type="text" name="moduleCredit" value={module.moduleCredit} onChange={handleChange} id="moduleCredit" class="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 border-2 border-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="course name"></input>
                            </div>
                        </div>
                        </div>


                        <div className="sm:col-span-4">
                        <label htmlFor="comboBox" className="mb-2 text-sm font-semibold mr-5">
                            lecturer
                        </label>
                        <select
                            id="lecturer"
                            name="lecturer"
                            value={selectedValue}
                            onChange={handleChange}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select a lecturer</option>
                            {options.map(lecturer => (
                          <option key={lecturer.id} value={lecturer.name}>{lecturer.name}</option>
                            ))}
                        </select>

                       
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

export default Module;
