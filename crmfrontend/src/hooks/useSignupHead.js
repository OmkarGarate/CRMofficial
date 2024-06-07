import React from 'react'
import { useState } from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignupHead = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signupHead = async (firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:4000/headsNew/signupHeadNew', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType })
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            const json = await response.json();
            console.log(json);

            // Uncomment and properly implement if you want to update auth context
            // dispatch({ type: 'LOGIN', payload: json });

            // Uncomment if you want to save user to local storage
            // localStorage.setItem('user', JSON.stringify(json));

            setIsLoading(false);
        } catch (error) {
            console.error('Error during sign up:', error.message);
            setError(error.message);
            setIsLoading(false);
        }
    };

    return { signupHead, isLoading, error };
};

export default useSignupHead