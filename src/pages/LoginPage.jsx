import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("https://web-testing-3a06.up.railway.app/dashboard/v2/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email, password:password }),
      });

      const data = await response.json();

      if (response.ok) {
        
        // Login successful. Store the tokens in localStorage.
        localStorage.setItem("access_token", data.data.access);
        localStorage.setItem("refresh_token", data.data.refresh);
        // Navigate to the dashboard after a short delay to ensure tokens are saved.
        setTimeout(() => {
          navigate("/app/overview");
        }, 100);
      } else {
        // Login failed. Display the error message from the API.
        const errorMessage = data.errors?.detail || data.message || "An unknown error occurred.";
        setError(errorMessage);
      }
    } catch (err) {
      // Network error.
      setError("A network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#E4FFCC] via-[#C8D1BC] to-[#FFDAB0] min-h-screen p-2 bg-secondary-color flex justify-center items-center">
      <div className="card max-w-[500px] w-full shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="flex flex-col p-8 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-color">Drop Me</h2>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-4 text-center text-sm font-medium text-error">
              {error}
              {console.log(error)  }
            </div>
          )}

          {/* Button */}
          <div className="form-control mt-4 flex items-center justify-center">
            <button 
              type="submit" 
              className="btn bg-primary-color text-white border-0 w-full px-8 text-xl"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
