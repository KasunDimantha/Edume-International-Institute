import React, {useState, useEffect,  Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import A_Header from './a_component/A_Header'
import A_Footer from './a_component/A_Footer'
import A_Admin_Navbar from './a_component/A_Admin_Navbar';
import { GiCancel } from "react-icons/gi";
import { useWorkoutsContext } from './../../hooks/useWorkoutContext';
import { useAuthContext } from './../../hooks/useAuthContext';

function A_SemesterDetailsPage() {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext()
    

    const [activeTab, setActiveTab] = useState('loadsemester');
    const [courseid, setCourseid] = useState();

    const [semester_name, setName] = useState('');
    const [semester_duration, setDuration] = useState('');
    const [semester_start_date, setStartdate] = useState('');

    useEffect( () => {
        

        try {
            // Retrieve course id from local storage
            const storedCourseid = localStorage.getItem('courseid');
            
            if (storedCourseid) {
                setCourseid(storedCourseid);
            
        }
          
            const response =  axios.get(`http://localhost:3002/Semester/course/${storedCourseid}` ,  {
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
              });

              console.log(response)
              response.then((res) => {
                // Access the data from the resolved promise
                console.log(res.data); // This should output the array of objects
                if (res.status === 200) {
      
                    dispatch({ type: "SET_WORKOUTS", payload: res.data})
          
                  }
              }).catch((error) => {
                // Handle any errors
                console.error(error);
              });
  
      
              
      
          } catch (error) {
            console.log(error)
          }
        
        
    }, [dispatch, ]);
    

    const handleSemesterid = (id) => {
        localStorage.setItem('semesterid', id);
    }
    


    const handleLocalStorage = () => {
        localStorage.removeItem('courseid')
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/Semester/', {
                courseid,
                semester_name,
                semester_duration,
                semester_start_date
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            if (response.status === 200) {
    
                dispatch({ type: "CREATE_WORKOUT", payload: response.data})
      
              }

            console.log(response)


        } catch (error) {
            console.log(error)
        }
    }

    

      

  return (
    <div>
        <A_Header/>
        <A_Admin_Navbar/>
        {activeTab === 'loadsemester' && 
            <div>
               

                <div className=" justify-around absolute top-24 left-64 w-2/3">
                    
                    <div className="bg-gray-300 p-3 flex justify-between">
                        <button 
                            onClick={handleLocalStorage}
                            className='text-zinc-700 font-semibold hover:text-white py-1 px-2 border border-zinc-500 hover:border-transparent mr-3 hover:bg-zinc-500 rounded-lg'>
                                <Link to='/a_dashbord/a_loadallcoursePage' >Back to course</Link>
                        </button>
                        <h1 className="font-semibold text-2xl">All Semesters</h1>
                        <span></span>
                    
                    </div>

                    {/* Add button to link addStudent page */}
                    <div className="m-3 pr-16 flex justify-end ">
                    <button onClick={() => handleTabClick('addsemester')} class=" text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent mr-3 rounded-lg hover:bg-green-500">
                    Add New Semester
                    </button>
                    </div>

                    {/* add table to load All students*/} 
                    <table className="w-5/6 bg-white border border-gray-300 m-10">
                    <thead>
                        <tr className='bg-emerald-200'>
                        <th className="py-2 px-4 border-b">Semester Name</th>
                        <th className="py-2 px-4 border-b">Starting Date</th>
                        <th className="py-2 px-4 border-b">Action</th>
                        
                    
                        {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody >
                        {workouts && workouts.map((row) => (
                        <tr key={row._id}  className=' hover:bg-blue-300'>
                            <td className="py-2 px-4 text-center border-b">{row.semester_name}</td>
                            <td className="py-2 px-4 text-center border-b">{row.semester_start_date}</td>
                            <td className='text-center'>
                                <Link to='/a_dashbord/a_loadallcoursePage/semesterdetaispage/moduledetailspage'>
                                <button 
                                    class=" text-pink-700  font-semibold hover:text-white px-2 rounded-lg border border-pink-500 hover:border-transparent mr-4  hover:bg-pink-500"
                                    onClick={() => {handleSemesterid(row._id)}}>
                                        View
                                </button>
                                </Link>
                                
                                <button 
                                    class=" text-blue-700  font-semibold hover:text-white px-2 rounded-lg border border-blue-500 hover:border-transparent mr-4  hover:bg-blue-500">
                                        Edit
                                </button>
                                <button onClick={async () => {
                                try {
                                    const response = await axios.delete('http://localhost:3002/User/' + row._id,  {
                                      headers: {
                                          'Authorization': `Bearer ${user.token}`
                                        }
                                    });
                        
                                    if (response.status === 200) {
                            
                                        dispatch({ type: "DELETE_WORKOUT", payload: response.data})
                              
                                    }
                        
                                } catch (error) {
                                    console.log(error)
                                }
                            }}  class=" text-red-700 font-semibold hover:text-white px-2 rounded-lg border border-red-500 hover:border-transparent  hover:bg-red-500">
                                Delete
                            </button></td>
                            {/* Add more columns as needed */}
                        </tr>
                        ))}
                    </tbody>
                    </table>

                </div>
            </div>
            
        }

        {activeTab === 'addsemester' &&
            <div className='absolute top-20 left-64 w-2/3'>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={() => handleTabClick('loadsemester')} class="text-lg text-green-700 right-36 top-8 font-semibold leading-6 absolute"><GiCancel /></button>
            </div>
            <form  onSubmit={handleSubmit}  className="border-2 m-15 p-8 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">New Semester</h2>
                    

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Semester Name</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="name"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="semester name"
                                        onChange={(e) => setName(e.target.value)}>

                                    </input>
                                    </div>
                                </div>
                                </div>

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Semester Duration</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="semester_duration"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="duration"
                                        onChange={(e) => setDuration(e.target.value)}>
                                    </input>
                                    </div>
                                </div>
                                </div>

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Starting Date</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="name"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="starting date"
                                        onChange={(e) => setStartdate(e.target.value)}>
                                    </input>
                                    </div>
                                </div>
                                </div>

                        </div>
                            
                            
                    </div>
                </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type='submit'  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
            </form>
        </div>
        }

        <A_Footer/>
    </div>
  )
}

export default A_SemesterDetailsPage
