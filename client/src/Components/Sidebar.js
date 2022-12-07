/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import {
  FaBars,
  FaUserAlt,
  FaCommentAlt,
  FaShoppingBag,
  FaHome,
  FaGlobe,
  FaMoneyCheck,
  FaAngleDoubleLeft,
  FaBarcode,
  FaDog,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Action/authAction";

const Sidebar = ({ children }) => {

  const user = useSelector((state) => state.authReducer.user);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItem = [
    [
      {
        path: "/home",
        name: "home",
        icon: <FaHome />,
      },
      {
        path: "/Profile",
        name: "profile",
        icon: <FaUserAlt />,
      },
      {
        path: "/accouplement",
        name: "accouplement",
        icon: <FaDog />,
      },
      {
        path: "/addarticle",
        name: "Add New articles",
        icon: <FaBarcode />,
      },

      {
        path: "/",
        name: "Logout",
        icon: (
          <FaAngleDoubleLeft
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          />
        ),
      },
    ],
    [
      {
        path: "/home",
        name: "home",
        icon: <FaHome />,
      },
      {
        path: "/login",
        name: "login",
        icon: <FaGlobe />,
      },
      {
        path: "/register",
        name: "register",
        icon: <FaMoneyCheck />,
      },
    ],
  ];
  const menuItem1 = [
    [
      {
        path: "/home",
        name: "home",
        icon: <FaHome />,
      },
      {
        path: "/Profile",
        name: "profile",
        icon: <FaUserAlt />,
      },
      {
        path: "/accouplement",
        name: "accouplement",
        icon: <FaDog />,
      },
      {
        path: "/articles",
        name: "Product",
        icon: <FaShoppingBag />,
      },
      {
        path: "/addarticle",
        name: "Add New articles",
        icon: <FaBarcode />,
      },

      {
        path: "/",
        name: "Logout",
        icon: (
          <FaAngleDoubleLeft
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          />
        ),
      },
    ],
    [
      {
        path: "/home",
        name: "home",
        icon: <FaHome />,
      },
      {
        path: "/login",
        name: "login",
        icon: <FaGlobe />,
      },
      {
        path: "/register",
        name: "register",
        icon: <FaMoneyCheck />,
      },
    ],
  ];

 //let mi=menuItem.filter(item=>item.name!=="Product")  


  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {user&&(user?.role==="Baladia")&&
          
        menuItem
              .find((el, i) => !(i % 2))
              .map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
  {user&&((user?.role==="vet")||(user.role==="admin")||(user.role==="user"))&&
          
          menuItem1
                .find((el, i) => !(i % 2))
                .map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassname="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div
                      style={{ display: isOpen ? "block" : "none" }}
                      className="link_text"
                    >
                      {item.name}
                    </div>
                  </NavLink>
                ))}          
          {!user&&menuItem1
              .find((el, i) => i % 2)
              .map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
      </div>
      <main className="main">{children}</main>
    </div>
  );
};

export default Sidebar;
