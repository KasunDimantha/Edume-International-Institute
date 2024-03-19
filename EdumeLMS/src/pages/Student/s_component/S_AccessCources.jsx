import React, { useState, useEffect } from "react";
import poto1 from "./s_img/hand.jpg";
import axios from "axios";
import { useWorkoutsContext } from "../../../hooks/useWorkoutContext";
import { useAuthContext } from "../../../hooks/useAuthContext";

function S_AccessCources() {

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext()

  const getData = async () => {
    try {
      
      console.log(user.token)
      const response = await axios.get(`http://localhost:3002/Student/${user._id}`,  {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
        });


        if (response.status === 200) {

          dispatch({ type: "SET_WORKOUTS", payload: response.data})
        }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [dispatch, user]);

  return (
    <div>
      <div className='h-100'>
        <img src={poto1} alt="poto1" className="h-h100 w-w100% " />
        <div  className=" -mt-top bottom-20 absolute ">
        
        </div>
      </div>
    </div>
  )
}

export default S_AccessCources
