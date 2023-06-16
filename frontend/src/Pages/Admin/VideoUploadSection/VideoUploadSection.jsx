import React, { useState } from 'react';
import './VideoUploadSection.css';

const VideoUploadSection = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [filename, setFilename] = useState('');
  const [description, setDescription] = useState('');

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUploadClick = () => {
    // Code to upload file goes here
    console.log('Upload button clicked');
  };

  return (
    <div className="exam-uploader">
      <label htmlFor="exams" className="label">Choose examination:</label>
      <select id="exams" value={selectedExam} onChange={handleExamChange} className="select">
        <option value="" style={{color:'blue'}}>--Please choose an examination--</option>
        <option value="exam1">Exam 1</option>
        <option value="exam2">Exam 2</option>
        <option value="exam3">Exam 3</option>
      </select>

      <br />

      <label htmlFor="levels" className="label">Choose level:</label>
      <select id="levels" value={selectedLevel} onChange={handleLevelChange} className="select">
        <option value="">--Please choose a level--</option>
        <option value="level1">Level 1</option>
        <option value="level2">Level 2</option>
        <option value="level3">Level 3</option>
      </select>

      <br />

      <label htmlFor="filename" className="label">File name:</label>
      <input type="text" id="filename" value={filename} onChange={handleFilenameChange} className="input" />

      <br />

      <label htmlFor="description" className="label">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} className="textarea" />

      <br />

      <button onClick={handleUploadClick} className="button">Upload</button>
    </div>
  );
};

export default VideoUploadSection;
