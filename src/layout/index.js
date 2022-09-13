import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
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
