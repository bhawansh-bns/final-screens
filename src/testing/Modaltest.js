// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// import { getApplications_response } from "../temp-variables/tempResponses";
// import "./styles.css";

// function MyModal({ show, handleClose, title, body }) {
//   return (
//     <div className="overlay">
//       <Modal
//         show={show}
//         onHide={handleClose}
//         centered
//         className="my-modal"
//         style={{
//           zIndex: 9999,
//           position: "absolute",
//           top: "50%",
//           left: "70%",

//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{body}</Modal.Body>
//         <Modal.Footer>
//           <button onClick={handleClose}>Close</button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default function Table() {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const data = getApplications_response;
//   const handleRowClick = (row) => {
//     setSelectedRow(row);
//   };

//   const handlePopupClose = () => {
//     setSelectedRow(null);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>CompanyName</th>
//             <th>Admin</th>
//             <th>Applicant</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} onClick={() => handleRowClick(row)}>
//               <td>{row.CompanyName}</td>
//               <td>{row.Admin}</td>
//               <td>{row.Applicant}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedRow && (
//         <div className="overlay">
//           <div className="modal">
//             <h1>Hi</h1>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
