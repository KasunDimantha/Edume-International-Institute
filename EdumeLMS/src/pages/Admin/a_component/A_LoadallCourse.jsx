import A_Admin_Navbar from './A_Admin_Navbar'
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useLocation  } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

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
    const [updateid, setUpdateid] = useState();
    const [courseid, setCourseid] = useState('');

    const [name, setName1] = useState('');
    const [category, setCategory1] = useState('');
    const [about, setAbout1] = useState('');
    const [outcomes, setOutcome1] = useState('');
    const [duration, setDuration1] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCourseid = (id) => {
        setCourseid(id);
        localStorage.setItem('courseid', id);
    }

    const handleUpdateId = async (id) => {
        setUpdateid(id);
        try {
          
            const response = await axios.get('http://localhost:3002/Course/' + id,  {
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
              });
              setName1(response.data[0].course_name)
              setCategory1(response.data[0].course_category)
              setAbout1(response.data[0].course_description.course_about)
              setOutcome1(response.data[0].course_description.course_outcomes)
              setDuration1(response.data[0].course_description.course_duration)

              console.log(response.data[0].course_description.course_duration)

             
          } catch (error) {
            console.log(error)
          }
          handleTabClick('editCourse')
        
    }


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

    const handleupdateSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.patch('http://localhost:3002/Course/' + updateid, {
                _id : updateid,
                course_name : name,
                course_category : category,
                course_about : about,
                course_outcomes : outcomes,
                course_duration : duration
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    
    

  return (
    <div>
       <div className="  min-h-screen d-flex">

        <A_Admin_Navbar/>

        { activeTab === 'loadCourse' && 
            <div className=" justify-around absolute top-24 left-64 w-2/3">

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
                                <span 
                                      
                                    className='cursor-pointer mr-2'><FaEdit onClick={() => handleUpdateId(data._id)}/>
                                </span>
                                <span onClick={async () => {
                                try {
                                    const response = await axios.delete('http://localhost:3002/Course/' + data._id,  {
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
                                {data.course_name}
                            </p>

                        <div className='company flex items-center gap-2'>
                            <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{data.course_category}</span>
                        </div>
                        <div className='company flex items-center gap-2'>
                            <p className='text-[14px] py-[1rem] block  group-hover:text-white'>{/*data.course_description.course_duration*/}</p>
                        </div>

                        <button 
                            className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor group-hover/item:text-textColor group-hover:text-black'>
                                <span onClick={() => handleCourseid(data._id)} class="cursor-pointer mr-2" >
                                    <Link to={{ 
                                                pathname: '/a_dashbord/a_loadallcoursePage/semesterdetaispage'
                                            }}>
                                        View Semesters...
                                    </Link>
                                    
                                </span>
                        </button>

                        </div>


                        )
                    })
                    }


                    </div>

                        
            </div>
        }

        { activeTab === 'addCourse' &&
            <div className='absolute top-24 left-64 w-2/3'>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={() => handleTabClick('loadCourse')} class="text-lg text-green-700 right-36 top-8 font-semibold leading-6 absolute"><GiCancel /></button>
                </div>
                
                <form onSubmit={handleSubmit}  className="border-2 m-15 p-4 mx-32">
                        <div class="space-y-5">
                            <div class="border-b border-gray-900/10 pb-5">
                                <h1 class="text-base font-semibold leading-7 text-gray-900">New Course</h1>
                            

                                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

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

                                <div class="mt-3 flex items-center justify-end gap-x-6">
                                    <button type='submit'  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Save Course
                                    </button>
                                </div>
                </form>
                    
            </div>
        }

        { activeTab === 'editCourse' &&
            <div className='absolute top-20 left-64 w-2/3'>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={() => handleTabClick('loadCourse')} class="text-lg text-green-700 right-36 top-8 font-semibold leading-6 absolute"><GiCancel /></button>
                </div>

                <form onSubmit={handleupdateSubmit}  className="border-2 m-15 p-4 mx-32">
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-5">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Update Course</h2>
                            

                                <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                                        <div class="sm:col-span-4">
                                        <label class="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                       
                                            <input 
                                                type="text" 
                                                name="name"  
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                                placeholder="course name"
                                                value={name}
                                                onChange={(e) => setName1(e.target.value)}>

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
                                                value={category}
                                                onChange={(e) => setCategory1(e.target.value)}>
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
                                                value={about}
                                                onChange={(e) => setAbout1(e.target.value)}>
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
                                                value={outcomes}
                                                onChange={(e) => setOutcome1(e.target.value)}>
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
                                                value={duration}
                                                onChange={(e) => setDuration1(e.target.value)}>
                                            </input>
                                            </div>
                                        </div>
                                        </div>

                                </div>
                                    
                                    
                            </div>
                        </div>

                                <div class="mt-3 flex items-center justify-end gap-x-6">
                                    <button onClick={() => handleTabClick('loadCourse')} type='submit'  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Update Course
                                    </button>
                                </div>
                </form>

            </div>
        }

        
        </div>
    </div>
  )
}

export default A_LoadallCourse
