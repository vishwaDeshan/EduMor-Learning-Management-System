import React, { useState } from 'react';
import axios from 'axios';
function Advertisement() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/advertisements/save')
  .then(response => {
    console.log(response.data); // Log the response data if the request is successful
  })
  .catch(error => {
    console.log(error); // Log any errors that occur
  });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ marginBottom: '10px' }}>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Link:
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <button type="submit" style={{ alignSelf: 'center' }}>Submit</button>
    </form>
  );
}

export default Advertisement;
