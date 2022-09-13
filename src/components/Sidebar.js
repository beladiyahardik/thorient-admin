import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/dashboard' className='link'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/category' className='link'>
            Category
          </Link>
        </li>
        <li>
          <Link to='/sub-category' className='link'>
            Sub Category
          </Link>
        </li>
        <li>Stories</li>
        <li>Wallpapers</li>
        <li>
          <Link to='/about' className='link'>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/privacy' className='link'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
