import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Test;


// import { useState } from "react";

// function MyComponent() {
//   const [user, setUser] = useState({ firstName: "" });
//   const [firstName, setFirstName] = useState("");
//   const [firstNameError, setFirstNameError] = useState("");

//   const handleFirstNameChange = (e) => {
//     const value = e.target.value;
//     setFirstName(value);

//     if (value.length < 2) {
//       setFirstNameError("First name must be at least 2 characters long");
//     } else {
//       setFirstNameError("");
//     }
//   };

//   return (
//     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//       <div className="form-group">
//         <label htmlFor="firstName">First Name</label>
//         <input
//           type="text"
//           className={`form-control ${firstNameError && "is-invalid"}`}
//           id="firstName"
//           placeholder={user.firstName}
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//         {firstNameError && (
//           <div className="invalid-feedback">{firstNameError}</div>
//         )}
//       </div>
//     </div>
//   );
// }