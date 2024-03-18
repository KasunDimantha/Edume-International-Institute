import  { useState } from "react";
import  axios from 'axios';
import { useAuthContext } from "./useAuthContext";
import { json } from "react-router-dom";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();


    const signup = async (email, password, name, cnumber, role) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3002/UserLS/signup', {
                name: name,
                email: email,
                con_number: cnumber,
                role: role,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            // Check if response status is 200 (OK)
            if (response.status === 200) {
                const user = response.data; // Get user data from response

                // save the user to local storage
                localStorage.setItem('user', JSON.stringify(user));
          
                // update the auth context
                dispatch({type: 'LOGIN', payload: user});
            }

        } catch (error) {
            setIsLoading(false)
            console.log(json.error)
        } 
    }

    return { signup, isLoading, error }
}