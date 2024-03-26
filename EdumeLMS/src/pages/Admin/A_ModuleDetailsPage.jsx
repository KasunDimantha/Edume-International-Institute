import React, {useState, useEffect,  Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import A_Header from './a_component/A_Header'
import A_Footer from './a_component/A_Footer'
import A_Admin_Navbar from './a_component/A_Admin_Navbar';
import { GiCancel } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useWorkoutsContext } from './../../hooks/useWorkoutContext';
import { useAuthContext } from './../../hooks/useAuthContext';

function A_ModuleDetailsPage() {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext()
    

    const [activeTab, setActiveTab] = useState('loadmodule');
    const [courseid, setCourseid] = useState();
    const [semesterid, setSemesterid] = useState();

    const [module_id, setModuleid] = useState('');
    const [module_name, setModuleName] = useState('');
    const [module_credit, setModuleCredit] = useState('');

    useEffect( () => {
        

        try {
            // Retrieve course id from local storage
            const storedCourseid = localStorage.getItem('courseid');
            const storedSemesterid = localStorage.getItem('semesterid');
            
            setCourseid(storedCourseid);
            setSemesterid(storedSemesterid);

            console.log(storedSemesterid)
            
          
            const response =  axios.get(`http://localhost:3002/Module/semester/${storedSemesterid}` ,  {
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
              });

              response.then((res) => {
                // Access the data from the resolved promise
                 // This should output the array of objects
                 console.log(res.data);
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
    }, [ ]);
    

    


    const handleLocalStorage = () => {
        localStorage.removeItem('semesterid')
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/Module/', {
                courseid,
                semesterid,
                module_id,
                module_name,
                module_credit
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
        {activeTab === 'loadmodule' && 
            <div>
               

                <div className=" justify-around absolute top-24 left-64 w-2/3">
                    
                    <div className="bg-gray-300 p-3 flex justify-between">
                        <button 
                            onClick={handleLocalStorage}
                            className='text-zinc-700 font-semibold hover:text-white py-1 px-2 border border-zinc-500 hover:border-transparent mr-3 hover:bg-zinc-500 rounded-lg'>
                                <Link to='/a_dashbord/a_loadallcoursePage/semesterdetaispage' >Back to Semester</Link>
                        </button>
                        <h1 className="font-semibold text-2xl">All Module</h1>
                        <span></span>
                    
                    </div>

                    {/* Add button to link addStudent page */}
                    <div className="m-3 pr-16 flex justify-end ">
                    <button onClick={() => handleTabClick('addmodule')} class=" text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent mr-3 rounded-lg hover:bg-green-500">
                    Add New Module
                    </button>
                    </div>

                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10' >
                        { workouts && workouts.map((data) => (
                        
                        <div key={data._id} className='group group/item singleJob w-[250px] p-[15px] rounded-[10px] shadow-lg shadow-greyIsh-400/700 bg-[#94e0f7] hover:shadow-lg hover:bg-[#3260b5e5] '>
                            <div className='flex justify-end'>
                                <span 
                                    onClick={() => handleTabClick('updateModule')}  
                                    className='cursor-pointer mr-2'><FaEdit onClick={() => handleUpdateId(data._id)}/>
                                </span>
                                <span onClick={async () => {
                                try {
                                    const response = await axios.delete('http://localhost:3002/Module/' + data._id,  {
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
                            }} className='cursor-pointer'><MdDelete /></span>
                            </div>
                            
                            <p className='text-md font-bold  pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                {data.module_id}
                            </p>

                            <div className='company flex items-center gap-2'>
                                <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{data.module_name}</span>
                            </div>
                            <div className='company flex items-center gap-2'>
                                <p className='text-[14px] py-[1rem] block  group-hover:text-white'>{/*data.course_description.course_duration*/}</p>
                            </div>

                            <button 
                                className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor group-hover/item:text-textColor group-hover:text-black'>
                                    <span onClick={() => handleCourseid(data._id)} class="cursor-pointer mr-2" >
                                        
                                            View Module...
                                        
                                    </span>
                            </button>

                        </div>
                    ))
                    }
                    </div>

                    

                </div>
            </div>
            
        }

        {activeTab === 'addmodule' &&
            <div className='absolute top-20 left-64 w-2/3'>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={() => handleTabClick('loadmodule')} class="text-lg text-green-700 right-36 top-8 font-semibold leading-6 absolute"><GiCancel /></button>
            </div>
            <form  onSubmit={handleSubmit}  className="border-2 m-15 p-8 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">New Module</h2>
                    

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Module ID</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="moduleid"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="module id"
                                        onChange={(e) => setModuleid(e.target.value)}>

                                    </input>
                                    </div>
                                </div>
                                </div>

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Module Name</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="modulename"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="module name"
                                        onChange={(e) => setModuleName(e.target.value)}>
                                    </input>
                                    </div>
                                </div>
                                </div>

                                <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Module Creadit</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                    <input 
                                        type="text" 
                                        name="modulecreadit"  
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                        placeholder="module creadit"
                                        onChange={(e) => setModuleCredit(e.target.value)}>
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

        {activeTab === 'updatemodule' &&
            <div className='absolute top-20 left-64 w-2/3'>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={() => handleTabClick('loadmodule')} class="text-lg text-green-700 right-36 top-8 font-semibold leading-6 absolute"><GiCancel /></button>
            </div>
            <form  onSubmit={handleSubmit}  className="border-2 m-15 p-8 mx-32">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">New Module</h2>
                    

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
                            <button type='submit'  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                        </div>
            </form>
        </div>
        }

        <A_Footer/>
    </div>
  )
}

export default A_ModuleDetailsPage
