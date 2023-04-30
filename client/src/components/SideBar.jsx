import React, { useState } from "react";
import "./SideBar.css";
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Home",
      route:"/"
    },
    {
      text: "About",
      route:"/about"
    },
    {
      text: "Contact Us",
      route:"/contact"
    },
    {
      text: "Admin",
      route:"/admin"
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div>
              <img
                src="https://brandradiator.com/images/BR-logo1.png"
                alt=""
                srcset=""
              />
              {/* <h2>Showkart</h2> */}
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, route }) => (
            <Link
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              to={route}
            >
              {/* <img className="menu-item-icon" src={icon} alt="" srcset="" /> */}
              {isExpanded && <p>{text}</p>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
