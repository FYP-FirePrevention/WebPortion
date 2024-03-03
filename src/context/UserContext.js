import React, { createContext, useState, useContext, useCallback } from "react";

import { login as loginUser } from "../utils/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [userMail, setUserMail] = useState("");

  const login = useCallback(async (email, password) => {
    setError(""); // Reset error state
    setLoading(true); // Set loading to true when login starts
    try {
      const data = await loginUser(email, password);
      if (data.userMail) {
        setIsAuthenticated(true);
        setUserMail(data.userMail);
      } else {
        setIsAuthenticated(false);
        setError("Incorrect email or password");
      }
    } catch (error) {
      setIsAuthenticated(false);
      setError(
        error.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ isAuthenticated, userMail, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
