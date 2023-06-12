import React, { useEffect,useState } from 'react';
import axios from 'axios';


function Advertisement() {
  const [addTitle, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [list, setList] = useState('');
  
  function removeList(index){

    const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
  
    
   }
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',marginTop:'30px',marginLeft:'200px',border:'1px',borderColor:'brown'}}>
      <label style={{ marginBottom: '10px',color:'blue'  }}>
        Title:
        <input
          type="text"
          value={addTitle}
          onChange={(event) => setTitle(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'8px' }}
        />
      </label>
      <label style={{ marginBottom: '7px',color:'black'  }}>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          style={{ marginLeft: '30px',padding:'20px' }}
        />
      </label>
      <label style={{ marginBottom: '10px',color:'black' }}>
        Link:
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'8px'  }}
        />
      </label>
     
      <button
  type="submit"
  className="btn btn-primary"
  style={{
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'blue',
    transition: 'background-color 0.3s, color 0.3s',
  }}
  onMouseEnter={(e) => { 
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  }}
  onMouseLeave={(e) => { 
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
  }}
>
  Submit
</button>

    </form>
  );
}

export default Advertisement;
