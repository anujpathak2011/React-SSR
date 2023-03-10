import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login as loggedin } from 'redux/slices/authSlice'

const dummyEmail = 'dummy@gmail.com';
const dummyPassword = 'dummyPass'

export const useLogin = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const login = async (email, password) => {
    if (email !== dummyEmail || password !== dummyPassword) {
      setError('Email or password is incorrect!');
    } else {
      dispatch(loggedin({email, password}));
    }
  }
  
  return { login, error }
}
