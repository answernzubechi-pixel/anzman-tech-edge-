import React, { createContext, useState, useContext } from 'react';
// Import the database at the top using the modern way
import { Studentdbs } from '../Data/Studentdbs'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = (id, pin) => {
    // Look for the student in the database
    const student = Studentdbs.find(s => s.id === id && s.pin === pin);

    if (student) {
      setUser(student);
      setError("");
      return true;
    } else {
      setError("Invalid Admission ID or PIN");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);