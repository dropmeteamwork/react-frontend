import React from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app/overview");
  };

  return (
    <div className="min-h-screen bg-secondary-color flex justify-center items-center">
      LoginPage
    </div>
  );
}
