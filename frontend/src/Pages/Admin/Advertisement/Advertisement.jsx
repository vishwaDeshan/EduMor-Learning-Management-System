import React, { useState } from 'react';
import axios from 'axios';
function Advertisement() {
  const [addTitle, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAdd(addTitle, link);

    // Clear form inputs
    setTitle('');
    setLink('');
  };
  const submitAdd = (addTitle, link) => {
    axios.post('advertisements/save',{addTitle,link})
  .then(response => {
    console.log(response.data);
    alert("succesfull");
  })
  .catch(error => {
    console.log(error);
    alert("error") ;
    
  });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',marginTop:'50px',marginLeft:'300px',border:'2px',borderColor:'red'}}>
      <label style={{ marginBottom: '10px',color:'blue'  }}>
        Title:
        <input
          type="text"
          value={addTitle}
          onChange={(event) => setTitle(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'15px' }}
        />
      </label>
      <label style={{ marginBottom: '10px',color:'blue'  }}>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          style={{ marginLeft: '30px',padding:'20px' }}
        />
      </label>
      <label style={{ marginBottom: '10px',color:'blue' }}>
        Link:
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'15px'  }}
        />
      </label>
      <button type="submit"  style={{alignSelf:'center' ,padding:'5px',backgroundColor:'blue',color:'white' }}>Submit</button>
    </form>
  );
}

export default Advertisement;
