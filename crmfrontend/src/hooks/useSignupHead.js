import React from 'react'
import { useState } from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignupHead = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signupHead = async (firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType) =>{
        setIsLoading(true)
        setError(null)

        console.log(firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType)
        const response = await fetch('http://localhost:4000/heads/signupHead', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save the user to local storare
            // localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            // dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }

    }
    return {signupHead, isLoading, error}
}

export default useSignupHead