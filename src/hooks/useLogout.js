import { useDispatch } from 'react-redux' 
import { logout  } from 'redux/slices/authSlice'

export const useLogout  = () => {
  const dispatch = useDispatch()

  const logoutRequest = async () => {
      localStorage.setItem('user', null)

      dispatch(logout())
    }


  return {logout: logoutRequest}
}
