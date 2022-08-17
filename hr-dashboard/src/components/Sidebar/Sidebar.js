import React, { useState } from "react";
import {
  MdOutlineWatchLater,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdPlaylistAdd,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const [sidebars, toggleSidebar] = useState(false);
  return (
    <aside className={`${sidebars ? "sidebar open" : "sidebar"}`}>
      <NavLink to="/" className="navlink">
        <li>
          <MdHome size={25} />
          <span>Home</span>
        </li>
      </NavLink>

      <NavLink to="/dashboard" className="navlink">
        <li>
          <MdPlaylistAdd size={25} />
          <span>Dashboard</span>
        </li>
      </NavLink>
      <NavLink to="/test" className="navlink">
        <li>
          <MdOutlineWatchLater size={25} />
          <span>Quarterly Test </span>
        </li>
      </NavLink>
      <NavLink to="/payroll" className="navlink">
        <li>
          <MdHistory size={25} />
          <span>Payroll Management</span>
        </li>
      </NavLink>
      <hr />
      <li>
        <MdExitToApp size={25} />
        <span>Log Out</span>
      </li>

      <hr />
    </aside>
  );
};
