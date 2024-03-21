import React, { useState, useEffect } from "react";
import poto1 from "./s_img/hand.jpg";
import axios from "axios";
import { useWorkoutsContext } from "../../../hooks/useWorkoutContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import S_ModuleDetails from "./S_ModuleDetails";

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
        console.log(response.response)

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
      </div>
      <div  className=" -mt-top bottom-20 absolute ">
      {workouts && workouts.map((module) => (
          <S_ModuleDetails key={module._id} module={module} />
        ))}
        </div>
    </div>
  )
}

export default S_AccessCources
