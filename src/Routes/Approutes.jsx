import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import Protected from './Protected';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />

      
      <Route 
        path="/dashboard" 
        element={
          <Protected>
            <Dashboard />
          </Protected>
        } 
      />

      
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;