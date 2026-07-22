import { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-text">Make-A-Ton 8.0</h1>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
