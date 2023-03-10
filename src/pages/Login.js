import React, { useState } from "react";
import { useLogin } from "hooks/useLogin";
import { NavLink } from "react-router-dom";

 const Login = () => {
  const [userName, setUserName] = useState("user1");
  const [password, setPassword] = useState("");
  const {login, error} = useLogin()

  const handleLogin = async () => {
    await login(userName, password)
  };

  return (
    <main className="grid pt-4">
      <div className="mx-auto p-8">
        <div className="card p-4">
          <div className="flex mb-4">
            <input
              className="w-full rounded-3xl border-none bg-gray-100 px-2 py-2 my-auto outline-none"
              placeholder="Email or username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex mb-4">
            <input
              className="w-full rounded-3xl border-none bg-gray-100 px-2 py-2 my-auto outline-none"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex border-t">
            <button className="btn btn-primary" onClick={handleLogin} >
              Login
            </button>

          </div>
          {error && <div className="text-red-400">{error}</div>}
          <NavLink to='/signup'>Registration </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Login;