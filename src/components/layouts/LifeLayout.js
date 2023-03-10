

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { login } from "redux/slices/authSlice";
import { Navbar } from "./Navbar";

const LifeLayout = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
     dispatch(login(user))
    }
  }, [dispatch])
  
  return (!user ? <Navigate to="/login" /> : 
    <>
      <Navbar />
      <main className="grid md:grid-cols-4 pt-4">
        <div className="md:col-span-1">
        </div>
        <div className="md:col-span-2 p-8">
          <Outlet />
          <div className="md:col-span-1">
            
          </div>
        </div>
      </main>
    </>
  );
};

export default LifeLayout;
