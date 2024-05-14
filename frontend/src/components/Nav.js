// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <NavLink className="navbar-brand" to="/">
//           Resort Booking
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 activeClassName="active"
//                 exact
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 activeClassName="active"
//                 to="/about"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 activeClassName="active"
//                 to="/services"
//               >
//                 Services
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 activeClassName="active"
//                 to="/contact"
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
// import { IoIosArrowDropdown } from "react-icons/io";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
const Navb = styled.nav`
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0); /* Bounce positions */
    }

    40% {
      transform: translateY(-20px); /* Bounce height */
    }

    60% {
      transform: translateY(-10px); /* Bounce height */
    }
  }
  // .attractive-box {
  //   display: inline-block;
  //   border-radius: 8px; /* Adjust the border-radius as needed for your desired roundness */
  //   background-color: black; /* Change to your preferred background color */
  //   padding: 8px 10px; /* Add padding for spacing inside the element */
  //   position: relative; /* Set text color to white or a color that contrasts well with the background */
  //   bottom: 6px;
  //   font-size: 14px;
  // }
  .profileimage {
    width: 40px;
    height: 40px;
    position: relative;

    bottom: 11px;
    border-radius: 50%;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 0px 20px;
    border-bottom: 1px solid powderblue;
    background-color: whitesmoke;
    color: white;
    padding-bottom: 20px;
    transition: 0.5s;
    // background-color: ghostwhite;
  }

  .logo-container {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 8px;
  }

  .logo {
    font-size: 20px;
    background-color: white;
    font-weight: bolder;
    font-family: "Arial", sans-serif; /* Change the font family as needed */
    border: 2px solid lightcyan; /* Border around the text */
    padding: 4px 16px 4px 16px; /* Padding around the text */
    display: inline-block;
    border-radius: 5px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    // animation: bounce 5s infinite;
  }

  .nav-toggle {
    cursor: pointer;
    display: none;
    flex-direction: column;
  }

  .nav-links {
    display: flex;
    gap: 30px;
    position: relative;
    bottom: -5px;
  }

  .nav-links a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-family: emoji;
  }

  .nav-links a:hover {
    color: #ffcc00;
  }

  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    display: block;
    text-decoration: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    // display: none;
    // position: absolute;
    // background-color: #333;
    // box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    // z-index: 1;
    // width: 160px;
    position: absolute;
    top: 100%;
    left: -135px;
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 8px 0;
    min-width: 200px;
    z-index: 1;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* Updated .bar class */
  .bar {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 4px 0; /* Adjusted margin for better spacing */
    transition: 0.4s;
  }
  .cancel-btn {
    background-color: #333; /* Set background color for the cancel button */
    color: white; /* Set text color for the cancel button */
    padding: 8px 16px; /* Add padding to the cancel button for better visibility */
    border-radius: 5px; /* Add border radius to make the button rounded */
  }
  /* Updated @media query for screens less than 768px */
  @media (max-width: 768px) {
    .navbar {
      /* flex-direction: column;
    align-items: flex-start; */
      padding: 25px;
      width: 100%;
    }
    .logo-container {
      margin-bottom: 0px;
    }
    .attractive-box1 {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
    .nav-toggle {
      display: flex;
      align-self: flex-end;
      margin-top: -5px;
    }

    .nav-links {
      display: none;
      flex-direction: column;

      // position: absolute;
      // top: 50px;
      left: 0;
      background-color: #333;
      width: 100%;
      padding: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-top: 20px;
      z-index: 10;
    }
    .nav-links.show {
      display: flex;
    }

    /* .nav-links a {
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
  } */
    .nav-links a {
      color: white;
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 16px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .dropdown-content {
      display: block;
      padding: 10px;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    /* Adjusted styles for the bars in the nav-toggle */
    .nav-toggle .bar {
      width: 35px;
      height: 2px;
      background-color: black;
      margin: 4px 0;
      margin-bottom: 6px;
      transition: 0.4s;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateColoredLetters = () => {
  const text = "JK RR TOUR!";
  const coloredLetters = text.split("").map((letter, index) => {
    const color = generateRandomColor();
    return (
      <span key={index} style={{ color }}>
        {letter}
      </span>
    );
  });
  return coloredLetters;
};
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCancelShown, setIsCancelShown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsCancelShown(!isCancelShown);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleCancel = () => {
    setIsNavOpen(!isNavOpen);
    setIsCancelShown(!isCancelShown);
  };

  const { state, dispatch } = useUser();

  const callAbout = async () => {
    try {
      // ... your existing code to fetch user data

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
      // Handle errors
    }
  };
  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);
  // Function to generate random colors
  // const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling

  // // Function to handle scroll event
  // const handleScroll = () => {
  //   const scrollTop = window.pageYOffset;
  //   if (scrollTop > 0 && !isScrolled) {
  //     // If scrolled down and navbar is not already scrolled
  //     setIsScrolled(true);
  //   } else if (scrollTop === 0 && isScrolled) {
  //     // If scrolled to top and navbar is scrolled
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   // Add scroll event listener when component mounts
  //   window.addEventListener("scroll", handleScroll);
  //   // Clean up event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolled]);

  return (
    <Navb>
      <div className={`navbar ${isNavOpen ? "open" : ""}`}>
        {/* <div className="logo-container"> */}
        <div className="logo-container">
          <div
            style={{
              background: "linear-gradient(to right, green, wheat,orange)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              color: "black",
              fontFamily: "monospace",
            }}
            className="logo"
          >
            {/* {generateColoredLetters()} */}
            JK RR TOUR & TRAVELS
          </div>
          {/* <div className="logo"> */}
          {/* <div>
            <img
              style={{ width: "65px", height: "65px", borderRadius: "50%" }}
              src="./logo.png"
              alt="logo"
            />
          </div> */}
        </div>
        <div
          className="nav-toggle"
          onClick={isCancelShown ? toggleCancel : toggleNav}
        >
          {isCancelShown ? (
            <div className="cancel-btn">Cancel</div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>

        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/destination">Destination</NavLink>

          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {state.loggedIn && (
            <>
              {state.role === "admin" && (
                <NavLink to="/admin">
                  Admin {/* Replace with your admin link */}
                </NavLink>
              )}
            </>
          )}

          {/* {state.loggedIn ? (
            <>
              <NavLink to="/p">
                <img
                  src={state.img}
                  alt=" < CgProfile/>"
                  className="profileimage"
                />{" "}
                {/* <span className="attractive-arrow">
                  <IoIosArrowDropdown />
                </span> */}
          {/* <IoIosArrowDropdown
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    right: "12px",
                    bottom: "35px",
                  }}
                /> *
              </NavLink>
              <NavLink
                to="/logout"
                style={{ position: "relative", bottom: "1px" }}
              >
                <span className="attractive-arrow">
                  {" "}
                  <FiLogIn />
                </span>
                &nbsp; Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                style={{ position: "relative", bottom: "1px" }}
              >
                <span className="attractive-arrow">
                  {" "}
                  <FiLogIn />
                </span>
                &nbsp; Sign In
              </NavLink>
            </>
          )} */}
          {state.loggedIn ? (
            <div className="dropdown">
              <button
                className="profile-dropdown"
                style={{ border: "none", backgroundColor: "white" }}
                onClick={toggleDropdown}
              >
                <img src={state.img} alt="prof" className="profileimage" />
                {/* <IoIosArrowDropdown className="attractive-arrow" /> */}
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/p">
                    {" "}
                    <CgProfile /> My Profile{" "}
                  </NavLink>
                  <NavLink to="/logout">
                    {" "}
                    <FiLogIn /> Logout{" "}
                  </NavLink>
                </div>
              )}
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
