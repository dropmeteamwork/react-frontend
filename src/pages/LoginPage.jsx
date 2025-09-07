import React from 'react'
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/overview');
  };

  return (
    
    <div className="bg-gradient-to-r from-[#E4FFCC] via-[#C8D1BC] to-[#FFDAB0] min-h-screen p-2 bg-secondary-color flex justify-center items-center">
      <div className="card max-w-[500px] w-full shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="flex flex-col p-8 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-color">Login</h2>

          {/* Email */}
          <div className="form-control flex flex-col mb-5">
            <label className="label mb-2">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full" 
              required 
            />
          </div>

          {/* Password */}
          <div className="form-control flex flex-col mb-5">
            <label className="label mb-2">
              <span className="label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="input input-bordered w-full" 
              required 
            />
          </div>

          {/* Button */}
          <div className="form-control mt-4 flex items-center justify-center">
            <button type="submit" className="btn bg-primary-color text-white border-0 w-full  px-8 text-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
