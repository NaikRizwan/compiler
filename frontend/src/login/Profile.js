// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useUser } from "../context/UserContext";
// // import styled from "styled-components";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Wrapper = styled.section`
// //   .profile-container {
// //     margin: 20px;
// //     padding: 20px;
// //     border: 1px solid #ccc;
// //     border-radius: 10px;
// //     background-color: #f9f9f9;
// //   }

// //   .profile-title {
// //     text-align: center;
// //     color: #333;
// //   }

// //   .profile-details {
// //     margin-bottom: 20px;
// //   }

// //   .profile-info {
// //     font-size: 16px;
// //     margin-bottom: 10px;
// //   }

// //   .compilation-title {
// //     color: #333;
// //   }

// //   .compilation-item {
// //     display: flex;
// //     margin-bottom: 20px;
// //   }
// //   .compilation-row {
// //     display: flex;
// //     align-items: center;
// //   }

// //   .compilation-info {
// //     margin-left: 20px; /* Adjust spacing between image and details */
// //   }
// //   .compilation-details {
// //     flex: 1;
// //   }

// //   .separator {
// //     margin-top: 20px;
// //     border: 0;
// //     border-top: 1px solid #ccc;
// //   }
// // `;

// // const Profile = () => {
// //   const { state } = useUser();
// //   const [userData, setUserData] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("/getUserData", {
// //           params: { email: state.email },
// //         });
// //         setUserData(response.data);
// //       } catch (error) {
// //         console.error("Failed to fetch user data", error);
// //       }
// //     };

// //     fetchData();
// //   }, [state.email]);

// //   if (!userData) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <Wrapper>
// //       <div className="profile-container">
// //         <h1 className="profile-title">Your Profile</h1>
// //         <div className="profile-details">
// //           <p className="profile-info">
// //             <strong>Email:</strong> {userData.email}
// //           </p>
// //           <p className="profile-info">
// //             <strong>Full Name:</strong> {userData.name}
// //           </p>
// //           <p className="profile-info">
// //             <strong>Total Points:</strong> {userData.totalPoints}
// //           </p>
// //         </div>
// //         <hr className="separator" />
// //         <h2 className="compilation-title">Your Coding History</h2>
// //         {userData.compilationHistory.length === 0 ? (
// //           <p>No coding history available.</p>
// //         ) : (
// //           userData.compilationHistory.map((item, index) => (
// //             <div key={index} className="compilation-item">
// //               <div className="compilation-details">
// //                 <p className="compilation-info">
// //                   <strong>Language:</strong> {item.language}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Difficulty:</strong> {item.difficulty}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Code:</strong> {item.code}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Result:</strong> {item.result}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Success:</strong> {item.success ? "Yes" : "No"}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Points:</strong> {item.points}
// //                 </p>
// //                 <p className="compilation-info">
// //                   <strong>Date:</strong>{" "}
// //                   {new Date(item.createdAt).toLocaleString()}
// //                 </p>
// //               </div>
// //               <hr className="separator" />
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </Wrapper>
// //   );
// // };

// // export default Profile;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useUser } from "../context/UserContext";
// import styled from "styled-components";
// import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaEnvelope, FaStar } from "react-icons/fa";

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
//     margin-bottom: 20px;
//   }

//   .profile-details {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
//   }

//   .profile-info {
//     font-size: 16px;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//   }

//   .profile-info svg {
//     margin-right: 10px;
//   }

//   .compilation-title {
//     color: #333;
//     margin-top: 20px;
//   }

//   .compilation-item {
//     display: flex;
//     margin-bottom: 20px;
//     border-bottom: 1px solid #ccc;
//     padding-bottom: 10px;
//   }

//   .compilation-details {
//     flex: 1;
//   }

//   .compilation-info {
//     font-size: 14px;
//   }

//   .separator {
//     margin-top: 20px;
//     border: 0;
//     border-top: 1px solid #ccc;
//   }
// `;

// const Profile = () => {
//   const { state } = useUser();
//   const [userData, setUserData] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCompilation, setSelectedCompilation] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/getUserData", {
//           params: { email: state.email },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Failed to fetch user data", error);
//       }
//     };

//     fetchData();
//   }, [state.email]);

//   const handleShowModal = (compilation) => {
//     setSelectedCompilation(compilation);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedCompilation(null);
//   };

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Wrapper>
//       <div className="profile-container">
//         <h1 className="profile-title">Your Profile</h1>
//         <div className="profile-details">
//           <p className="profile-info">
//             <FaEnvelope /> <strong>Email:</strong> {userData.email}
//           </p>
//           <p className="profile-info">
//             <FaUser /> <strong>Full Name:</strong> {userData.name}
//           </p>
//           <p className="profile-info">
//             <FaStar /> <strong>Total Points:</strong> {userData.totalPoints}
//           </p>
//         </div>
//         <h2 className="compilation-title">Your Coding History</h2>
//         {userData.compilationHistory.length === 0 ? (
//           <p>No coding history available.</p>
//         ) : (
//           userData.compilationHistory.map((item, index) => (
//             <div key={index} className="compilation-item">
//               <div className="compilation-details">
//                 <p className="compilation-info">
//                   <strong>Language:</strong> {item.language}
//                 </p>
//                 <p className="compilation-info">
//                   <strong>Difficulty:</strong> {item.difficulty}
//                 </p>
//                 <p className="compilation-info">
//                   <strong>Points:</strong> {item.points}
//                 </p>
//                 <Button variant="primary" onClick={() => handleShowModal(item)}>
//                   View Details
//                 </Button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {selectedCompilation && (
//         <Modal show={showModal} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Compilation Details</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>
//               <strong>Language:</strong> {selectedCompilation.language}
//             </p>
//             <p>
//               <strong>Difficulty:</strong> {selectedCompilation.difficulty}
//             </p>
//             <p>
//               <strong>Code:</strong>
//             </p>
//             <pre>{selectedCompilation.code}</pre>
//             <p>
//               <strong>Result:</strong>
//             </p>
//             <pre>{selectedCompilation.result}</pre>
//             <p>
//               <strong>Success:</strong>{" "}
//               {selectedCompilation.success ? "Yes" : "No"}
//             </p>
//             <p>
//               <strong>Date:</strong>{" "}
//               {new Date(selectedCompilation.createdAt).toLocaleString()}
//             </p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </Wrapper>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaStar } from "react-icons/fa";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;

  .profile-container {
    max-width: 800px;
    width: 100%;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .profile-title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  .profile-details {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .profile-info {
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .profile-info svg {
    margin-right: 10px;
  }

  .compilation-title {
    color: #333;
    margin-top: 20px;
    text-align: center;
  }

  .compilation-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .compilation-item {
    display: flex;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    justify-content: space-between;
  }

  .compilation-details {
    flex: 1;
  }

  .compilation-info {
    font-size: 14px;
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
  const [showModal, setShowModal] = useState(false);
  const [selectedCompilation, setSelectedCompilation] = useState(null);

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

  const handleShowModal = (compilation) => {
    setSelectedCompilation(compilation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCompilation(null);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <div className="profile-container">
        <h1 className="profile-title">Your Profile</h1>
        <div className="profile-details">
          <p className="profile-info">
            <FaEnvelope /> <strong>Email:</strong> {userData.email}
          </p>
          <p className="profile-info">
            <FaUser /> <strong>Full Name:</strong> {userData.name}
          </p>
          <p className="profile-info">
            <FaStar /> <strong>Total Points:</strong> {userData.totalPoints}
          </p>
        </div>
        <h2 className="compilation-title">Your Coding History</h2>
        {userData.compilationHistory.length === 0 ? (
          <p className="text-center">No coding history available.</p>
        ) : (
          <div className="compilation-list">
            {userData.compilationHistory.map((item, index) => (
              <div key={index} className="compilation-item">
                <div className="compilation-details">
                  <p className="compilation-info">
                    <strong>Language:</strong> {item.language}
                  </p>
                  <p className="compilation-info">
                    <strong>Difficulty:</strong> {item.difficulty}
                  </p>
                  <p className="compilation-info">
                    <strong>Points:</strong> {item.points}
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(item)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCompilation && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Compilation Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Language:</strong> {selectedCompilation.language}
            </p>
            <p>
              <strong>Difficulty:</strong> {selectedCompilation.difficulty}
            </p>
            <p>
              <strong>Code:</strong>
            </p>
            <pre>{selectedCompilation.code}</pre>
            <p>
              <strong>Result:</strong>
            </p>
            <pre>{selectedCompilation.result}</pre>
            <p>
              <strong>Success:</strong>{" "}
              {selectedCompilation.success ? "Yes" : "No"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedCompilation.createdAt).toLocaleString()}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Profile;
