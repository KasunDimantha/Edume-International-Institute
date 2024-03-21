import React, {Component,useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import A_Admin_Navbar from './A_Admin_Navbar'
import { useWorkoutsContext } from '../../../hooks/useWorkoutContext';
import { useAuthContext } from '../../../hooks/useAuthContext';


function A_LoadallTeacher() {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext()
    const admin = "Teacher";

    const getData = async () => {
        try {
          
          const response = await axios.get(`http://localhost:3002/User/role${admin}`,  {
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
      }, [dispatch, user]);


  return (
    <div>
      <div className="  min-h-screen d-flex">

            <A_Admin_Navbar/>

            <div className=" justify-around w-full">

                <div className="bg-gray-300 p-3">
                    <h1 className="font-semibold text-xl text-center">All Admins</h1>
                </div>

                {/* Add button to link addStudent page */}
                <div className="m-3 pr-16 flex justify-end ">
                    <button onClick={() => (window.location.pathname = "/addAdmin")} class=" text-green-700 font-semibold hover:text-white py-2 px-4 rounded-lg border border-green-500 hover:border-transparent mr-3 hover:bg-green-500">
                        Add New Lecture
                    </button>
                    
                </div>

             {/* add table to load All students*/}
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                        <th className="py-2 px-4 border-b">No.</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Con Number</th>
                            <th className="py-2 px-4 border-b">Action</th>
                    
                    
                        {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {workouts && workouts.map((row) => (
                        <tr key={row._id}>
                            <td className="py-2 px-4 border-b">{row._id}</td>
                            <td className="py-2 px-4 border-b">{row.name}</td>
                            <td className="py-2 px-4 border-b">{row.email}</td>
                            <td className="py-2 px-4 border-b">{row.con_number}</td>
                            <td>
                            
                            <button class=" text-red-700 font-semibold hover:text-white py-1 px-2 rounded-lg border border-red-500 hover:border-transparent  hover:bg-red-500">
                                Delete
                            </button>
                            </td>
                            {/* Add more columns as needed */}
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}

export default A_LoadallTeacher

