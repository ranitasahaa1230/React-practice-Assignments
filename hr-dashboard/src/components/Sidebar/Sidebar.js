import React, { useState } from "react";
import {
  MdOutlineWatchLater,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdPlaylistAdd,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
    const [sidebars, toggleSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <aside
      className={`${sidebars ? "sidebar open" : "sidebar"}`}
    //   onClick={() => handleToggleSidebar(false)}
    >
      <NavLink to="/" className="navlink">
        <li>
          <MdHome size={25} />
          <span>Home</span>
        </li>
      </NavLink>

      <NavLink to="/playlists" className="navlink">
        <li>
          <MdPlaylistAdd size={25} />
          <span>Playlists</span>
        </li>
      </NavLink>
      <NavLink to="/watch-later" className="navlink">
        <li>
          <MdOutlineWatchLater size={25} />
          <span>Watch Later </span>
        </li>
      </NavLink>
      <NavLink to="/liked-videos" className="navlink">
        <li>
          <MdThumbUp size={25} />
          <span>Liked Videos </span>
        </li>
      </NavLink>
      <NavLink to="/history" className="navlink">
        <li>
          <MdHistory size={25} />
          <span>History</span>
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
