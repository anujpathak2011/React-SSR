import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { login } from "redux/slices/authSlice";

const AuthLayout = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
     dispatch(login(user))
    }
  }, [dispatch])
  
  return (user ? <Navigate to="/" /> : <Outlet />);
};

export default AuthLayout;
