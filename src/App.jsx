import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login'
import { AuthProvider, useAuth } from './Context/Authcontext';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import MainLayout from './layout/Mainlayout';
import Result from './Pages/Result';
import './App.css';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />

          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <MainLayout pageTitle="Student Overview">
                <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route 
          path="/Result" 
          element={
           <ProtectedRoute>
          <MainLayout pageTitle="Academic Transcript">
           <Result />
           </MainLayout>
          </ProtectedRoute>
  } 
/>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
