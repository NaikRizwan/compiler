// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useUser } from "../context/UserContext";

// // const Profile = () => {
// //   const { state } = useUser();
// //   const [bookings, setBookings] = useState([]);
// //   const email = state.email;

// //   useEffect(() => {
// //     const fetchBookings = async () => {
// //       try {
// //         const response = await axios.get(`/bookings/${state.email}`);
// //         setBookings(response.data);
// //       } catch (error) {
// //         console.error("Error fetching bookings:", error);
// //         setBookings([]);
// //       }
// //     };
// //     fetchBookings();
// //   }, [email]);

// //   return (
// //     <div>
// //       <h1>Profile Page</h1>
// //       <div className="profile-details">
// //         <p>Email: {state.email}</p>
// //         <p>Full Name: {state.fullName}</p>
// //       </div>
// //       <div className="bookings-list">
// //         {bookings.map((booking, index) => (
// //           <div key={index} className="booking-item">
// //             <img src={booking.image} alt="Booking" width="100" height="100" />
// //             <div className="booking-details">
// //               <p>Serial No: {index + 1}</p>
// //               <p>Rate: {booking.rate}</p>
// //               <p>Destination: {booking.destination}</p>
// //               <p>
// //                 Journey Date: {new Date(booking.journeyDate).toDateString()}
// //               </p>
// //               <p>Number of Days: {booking.numberOfDays}</p>
// //               <p>Aadhar Number: {booking.aadharNumber}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <hr className="separator" />
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useUser } from "../context/UserContext";
// import styled from "styled-components";
// const Wrapper = styled.section`
//   .profile-container {
//     margin: 20px;
//     padding: 20px;
//     border: 1px solid #ccc;
//     border-radius: 10px;
//     background-color: #f9f9f9;
//   }

//   .profile-title {
//     text-align: center;
//     color: #333;
//   }

//   .profile-details {
//     margin-bottom: 20px;
//   }

//   .profile-info {
//     font-size: 16px;
//     margin-bottom: 10px;
//   }

//   .booking-title {
//     color: #333;
//   }

//   .booking-item {
//     display: flex;
//     margin-bottom: 20px;
//   }
//   .booking-row {
//     display: flex;
//     align-items: center;
//   }

//   .booking-info {
//     margin-left: 20px; /* Adjust spacing between image and details */
//   }
//   .booking-image {
//     width: 100px;
//     height: 100px;
//     margin-right: 20px;
//     border-radius: 5px;
//   }

//   .booking-details {
//     flex: 1;
//   }

//   .separator {
//     margin-top: 20px;
//     border: 0;
//     border-top: 1px solid #ccc;
//   }
// `;
// const Profile = () => {
//   const { state } = useUser();

//   const email = state.email;

//   return (
//     <Wrapper>
//       <div className="profile-container">
//         <h1 className="profile-title">Your Profile</h1>
//         <div className="profile-details">
//           <p className="profile-info">
//             <strong>Email:</strong> {state.email}
//           </p>
//           <p className="profile-info">
//             <strong>Full Name:</strong> {state.fullName}
//           </p>
//         </div>
//         <hr className="separator" />
//         <h2 className="booking-title">Your coding</h2>

//       </div>
//     </Wrapper>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Wrapper = styled.section`
  .profile-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  .profile-title {
    text-align: center;
    color: #333;
  }

  .profile-details {
    margin-bottom: 20px;
  }

  .profile-info {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .compilation-title {
    color: #333;
  }

  .compilation-item {
    display: flex;
    margin-bottom: 20px;
  }
  .compilation-row {
    display: flex;
    align-items: center;
  }

  .compilation-info {
    margin-left: 20px; /* Adjust spacing between image and details */
  }
  .compilation-details {
    flex: 1;
  }

  .separator {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #ccc;
  }
`;

const Profile = () => {
  const { state } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getUserData", {
          params: { email: state.email },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchData();
  }, [state.email]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <div className="profile-container">
        <h1 className="profile-title">Your Profile</h1>
        <div className="profile-details">
          <p className="profile-info">
            <strong>Email:</strong> {userData.email}
          </p>
          <p className="profile-info">
            <strong>Full Name:</strong> {userData.name}
          </p>
          <p className="profile-info">
            <strong>Total Points:</strong> {userData.totalPoints}
          </p>
        </div>
        <hr className="separator" />
        <h2 className="compilation-title">Your Coding History</h2>
        {userData.compilationHistory.length === 0 ? (
          <p>No coding history available.</p>
        ) : (
          userData.compilationHistory.map((item, index) => (
            <div key={index} className="compilation-item">
              <div className="compilation-details">
                <p className="compilation-info">
                  <strong>Language:</strong> {item.language}
                </p>
                <p className="compilation-info">
                  <strong>Difficulty:</strong> {item.difficulty}
                </p>
                <p className="compilation-info">
                  <strong>Code:</strong> {item.code}
                </p>
                <p className="compilation-info">
                  <strong>Result:</strong> {item.result}
                </p>
                <p className="compilation-info">
                  <strong>Success:</strong> {item.success ? "Yes" : "No"}
                </p>
                <p className="compilation-info">
                  <strong>Points:</strong> {item.points}
                </p>
                <p className="compilation-info">
                  <strong>Date:</strong>{" "}
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
              <hr className="separator" />
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default Profile;
