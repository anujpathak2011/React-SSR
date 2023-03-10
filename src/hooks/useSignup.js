import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { login } from 'redux/slices/authSlice'

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const json = { email, password }

    localStorage.setItem('user', JSON.stringify(json))

    dispatch(login(json))

    setIsLoading(false)

  }


  return {signup, isLoading, error}
}
