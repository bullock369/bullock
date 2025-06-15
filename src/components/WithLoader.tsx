'use client';
import { useState, useEffect } from "react";
import Loader from "./Loader";

const WithLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <>{children}</>;
};

export default WithLoader;
