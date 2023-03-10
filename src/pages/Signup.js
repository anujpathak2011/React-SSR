import { useSignup } from "hooks/useSignup";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };
  return (
    <form className="grid pt-4" onSubmit={handleSubmit}>
      <div className="mx-auto p-8">
        <div className="card">
          <div className="mb-4">
            <h3 className="">Signup</h3>
            <div className="flex p-4">
              <label className="w-4/12">Email: </label>
              <input
                className="w-8/12"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="flex p-4">
              <label className="w-4/12">Password: </label>
              <input
                className="w-8/12"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button className="btn btn-primary mx-3" disabled={isLoading}>Signup</button>
            {error && <div className="text-red-600">{error}</div>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
