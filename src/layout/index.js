import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className='layout'>
      <div>
        <Sidebar />
      </div>
      <div className='layout-child'>{children}</div>
    </div>
  );
};

export default Layout;
