import React from 'react';
import {  Route, Navigate , Routes} from 'react-router-dom';
import Login from '../container/login/login';
import AuthLayout from '../container/login/wrapped';


const NotFound = () => {
  return <Navigate to="/" />;
};

const FrontendRoutes = () => {
  return (
  <Routes>
       <Route path="/" element={<Login />} />
          <Route exact path="*" component={NotFound} />
 </Routes>
   
  );
};

export default AuthLayout(FrontendRoutes);
