import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState('');
  const [link, setLink] = useState('');
  const [list, setList] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call submitNews function to post data to MongoDB
      await submitNews(news, link);

      // Clear form inputs
      setNews('');
      setLink('');
    } catch (error) {
      console.error('Error saving news: ', error);
    }
  };

  const submitNews = (news, link) => {
    return axios
      .post('news/save', { news, link })
      .then((response) => {
        alert('News saved successfully');
      })
      .catch((error) => {
        console.error('Error saving news: ', error);
      });
  };

  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        marginLeft: '200px',
        border: '2px',
      }}
    >
      <label style={{ marginBottom: '10px' }}>
        News:
        <input
          type="text"
          value={news}
          onChange={(event) => setNews(event.target.value)}
          style={{ marginLeft: '10px', width: '300px', borderRadius: '10px', padding: '5px' }}
        />
      </label>

      <label style={{ marginBottom: '7px' }}>
        Link :
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          style={{
            marginLeft: '10px',
            width: '300px',
            borderRadius: '10px',
            padding: '5px',
            marginTop: '5px',
          }}
        />
      </label>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center' }}>
        Submit
      </button>
    </form>
  );
}

export default News;
