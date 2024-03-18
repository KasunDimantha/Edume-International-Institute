import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(name, email, con_number, role, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch ('/User/signup', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({name, email, con_number, role, password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        //save the user to local storage
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

        //update the Authcontext
        dispatch({type: 'LOGIN', payload:json})

        setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}