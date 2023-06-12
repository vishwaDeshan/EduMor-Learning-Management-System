


import React, { useState } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call submitNews function to post data to MongoDB
    submitNews(news, link);

    // Clear form inputs
    setNews('');
    setLink('');
  };

  const submitNews = (news, link) => {
    axios.post('news/save', { news, link })
      .then(response => {
        console.log('News saved successfully');
      })
      .catch(error => {
        console.error('Error saving news: ', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop:'50px',marginLeft:'300px',border:'2px'}}>
      <label style={{ marginBottom: '10px' }}>
       News:
        <input
          type="text"
          value={news}
          onChange={(event) => setNews(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'15px' ,padding:'8px' }}
        />
      </label>
     
     
      <label style={{ marginBottom: '10px' }}>
        Link :
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          style={{ marginLeft: '10px',width:'300px',borderRadius:'15px',padding:'8px',marginTop:'5px'  }}
        />
      </label>
      <button type="submit" className='btn btn-primary' style={{ alignSelf: 'center' }}>Submit</button>
    </form>
  );
}

export default News;
