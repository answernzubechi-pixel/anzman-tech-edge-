import { createContext, useState, useContext } from 'react';
import { Studentdbs } from '../Data/Studentdbs'; 
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // 2. The Logic (Make sure 'login' is lowercase)
  const login = (id, pin) => {
    // The actual search code
    const student = Studentdbs.find(s => s.id === id && s.pin === pin);

    if (student) {
      setUser(student);
      setError("");
      return true;
    } else {
      setError("Invalid ID or PIN");
      return false;
    }
  };

  const logout = () => { setUser(null); };

  return (
    // 3. The Broadcast (Check these names!)
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. THE EXPORT (Don't forget the 'export' keyword here!)
export const useAuth = () => useContext(AuthContext);

