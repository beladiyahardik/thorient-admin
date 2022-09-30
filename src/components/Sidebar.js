import { Button, Navbar } from "@nextui-org/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const sidebarData = [
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Privacy Policy",
      path: "/privacy"
    },
  ]

  const location = useLocation()

  return (

    <div className="sidebar">
      {/* <img src={sidebarLogo} alt="" /> */}
      <div className='sidebar-links'>
        {
          sidebarData.map((item, i) => (
            <Link to={item.path}>
              <button className={` ${location.pathname.includes(item.path) && 'active'} disabel `} onClick={() => { }} > {item.title}</button>
            </Link>
          ))
        }
      </div>
      <footer className='copyright' >
        <p>Copyrights 2022 <span>Thorient</span> <br /> All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
