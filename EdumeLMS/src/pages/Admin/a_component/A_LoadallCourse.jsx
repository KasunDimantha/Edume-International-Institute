import A_Admin_Navbar from './A_Admin_Navbar'
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useWorkoutsContext } from '../../../hooks/useWorkoutContext';
import { useAuthContext } from '../../../hooks/useAuthContext';

function A_LoadallCourse() {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext()

    const [activeTab, setActiveTab] = useState('loadCourse');
    const [course_name, setName] = useState('');
    const [course_category, setCategory] = useState('');
    const [course_about, setAbout] = useState('');
    const [course_outcomes, setOutcome] = useState('');
    const [course_duration, setDuration] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getData = async () => {
        try {
          
          const response = await axios.get('http://localhost:3002/Course/',  {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            });
            console.log(response.data)
    
            if (response.status === 200) {
    
              dispatch({ type: "SET_WORKOUTS", payload: response.data})
    
            }
    
        } catch (error) {
          console.log(error)
        }
      }


    useEffect(() => {
        getData()
    }, [dispatch, user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post('http://localhost:3002/Course/', {
                course_name,
                course_category,
                course_about,
                course_outcomes,
                course_duration
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            if (response.status === 200) {
    
                dispatch({ type: "CREATE_WORKOUT", payload: response.data})
      
              }

        } catch (error) {
            console.log(error)
        }
      };

    const Data = [
        {
          id:1,
          title:'Information Technology',
          company:'Edume Institute'      
        }, 
        {
            id:2,
            title:'Information Technology',
            company:'Edume Institute'      
        },
        {
            id:1,
            title:'Information Technology',
            company:'Edume Institute'      
          }, 
          {
              id:2,
              title:'Information Technology',
              company:'Edume Institute'      
            },{
                id:1,
                title:'Information Technology',
                company:'Edume Institute'      
              }, 
              {
                  id:2,
                  title:'Information Technology',
                  company:'Edume Institute'      
                }
       
    ]

  return (
    <div>
       <div className="  min-h-screen d-flex">

        <A_Admin_Navbar/>

        { activeTab === 'loadCourse' && 
            <div className=" justify-around w-full">

                <div className="bg-gray-300 p-3">
                    <h1 className="font-semibold text-xl text-center">All Courses</h1>
                </div>

                    {/* Add button to link addStudent page */}
                    <div className="m-3 pr-16 flex justify-end ">
                        <button onClick={() => handleTabClick('addCourse')} class=" text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent mr-3 hover:bg-green-500 rounded-lg">
                            Add Courses
                        </button>
                    </div>

                    
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10' >

                    { workouts && 
                    workouts.map((data) => {
                    
                    return(
                    
                        <div key={data._id} className='group group/item singleJob w-[250px] p-[15px] rounded-[10px] shadow-lg shadow-greyIsh-400/700 bg-[#94e0f7] hover:shadow-lg hover:bg-[#3260b5e5] '>
                            <div className='flex justify-end'>
                                <span className='cursor-pointer mr-2'><FaEdit /></span>
                                <span className='cursor-pointer'><MdDelete /></span>
                            </div>
                            
                            <p className='text-md font-bold  pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                {data.course_name}
                            </p>

                        <div className='company flex items-center gap-2'>
                            <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{data.course_category}</span>
                        </div>
                        <div className='company flex items-center gap-2'>
                            <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{data.course_description.course_duration}</span>
                        </div>

                        <button 
                            onClick={() => (window.location.pathname = "/loadAllSemester")} 
                            className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor group-hover/item:text-textColor group-hover:text-black'>
                                View Semesters...
                        </button>

                        </div>


                        )
                    })
                    }


                </div>

                        
            </div>
        }

        { activeTab === 'addCourse' &&
            <div>
                <form onSubmit={handleSubmit}  className="border-2 m-15 p-8 mx-32">
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">New Admin</h2>
                            

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="name"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="course name"
                                                onChange={(e) => setName(e.target.value)}>

                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">Course Category</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="category"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="category"
                                                onChange={(e) => setCategory(e.target.value)}>
                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">About Course</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="about"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="about course"
                                                onChange={(e) => setAbout(e.target.value)}>
                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">Course Outcomes</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="outcome"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="course outcomes"
                                                onChange={(e) => setOutcome(e.target.value)}>
                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">Course Duration</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="duration"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="course duration"
                                                onChange={(e) => setDuration(e.target.value)}>
                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                </div>
                                    
                                    
                            </div>
                        </div>

                                <div class="mt-6 flex items-center justify-end gap-x-6">
                                    <button type='submit'  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Save Course
                                    </button>
                                </div>
                    </form>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button onClick={() => handleTabClick('loadCourse')} class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                     </div>
            </div>
        }
        </div>
    </div>
  )
}

export default A_LoadallCourse
