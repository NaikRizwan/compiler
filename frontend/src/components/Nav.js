import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";

const Navb = styled.nav`
  .navbar-custom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 2px solid powderblue;
    background-color: whitesmoke;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 24px;
    background: linear-gradient(to right, #32cd32, #ffd700, #ffa500);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-family: "Arial", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-links a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ff8c00;
  }

  .profile-dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    right: -8px;
    position: absolute;
    background-color: #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    min-width: 160px;
    border-radius: 5px;
  }

  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s;
  }

  .dropdown-content a:hover {
    background-color: #575757;
  }

  .profile-dropdown:hover .dropdown-content {
    display: block;
  }

  .profileimage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .navbar-toggler {
    display: none;
    border: none;
    background-color: transparent;
  }

  .navbar-toggler-icon {
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 5px 0;
    transition: all 0.3s;
  }

  .navbar-toggler.collapsed .navbar-toggler-icon {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    .navbar-custom {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      background-color: #333;
      border-radius: 5px;
    }

    .nav-links.show {
      display: flex;
    }

    .nav-links a {
      color: white;
      margin: 5px 0;
    }

    .navbar-toggler {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { state, dispatch } = useUser();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const callAbout = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 400 || !data) {
        dispatch({ type: "CLEAR_USER" });
      } else {
        dispatch({
          type: "SET_USER",
          payload: {
            name: data.full_name,
            email: data.email,
            role: data.role,
            img: data.profileImage,
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "CLEAR_USER" });
    }
  };

  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);

  return (
    <Navb>
      <div className={`navbar navbar-custom ${isNavOpen ? "open" : ""}`}>
        <div className="logo-container">
          <div className="logo">Web-Based Compiler</div>
        </div>
        <button
          className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
          onClick={toggleNav}
        >
          <div className="navbar-toggler-icon"></div>
          <div className="navbar-toggler-icon"></div>
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/documentation">Documentation</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {state.loggedIn && state.role === "admin" && (
            <NavLink to="/admin">Admin</NavLink>
          )}
          {state.loggedIn ? (
            <div className="profile-dropdown">
              <button
                className="profile-dropdown-btn"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <img src={state.img} alt="profile" className="profileimage" />
              </button>
              <div className="dropdown-content">
                <NavLink to="/p">
                  <CgProfile /> My Profile
                </NavLink>
                <NavLink to="/logout">
                  <FiLogIn /> Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <FiLogIn />
              &nbsp; Sign In
            </NavLink>
          )}
        </div>
      </div>
    </Navb>
  );
};

export default Nav;
