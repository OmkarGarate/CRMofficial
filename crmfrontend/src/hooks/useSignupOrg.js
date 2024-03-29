import React from 'react'
import { useState } from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignupOrg = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signupOrg = async (fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId,  tnc, userType) =>{
        setIsLoading(true)
        setError(null)

        console.log(fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId, tnc, userType)
        const response = await fetch('http://localhost:4000/orgs/signupOrg', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId, tnc, userType})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save the user to local storare
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }

    }
    return {signupOrg, isLoading, error}
}

export default useSignupOrg