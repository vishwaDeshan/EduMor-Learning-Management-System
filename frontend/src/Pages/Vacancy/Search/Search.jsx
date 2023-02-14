import React from 'react'
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Search.css'


function Search() {
  
  return (
    <Box className="wrapper-search">
      <Select defaultValue="All" className="select-Bar">
      <MenuItem value="All">All Job Types</MenuItem>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>        
      </Select>
      <Select defaultValue="All" className="select-Bar">
      <MenuItem value="All">All Districts</MenuItem>
      <MenuItem value="Colombo">Colombo</MenuItem>
      <MenuItem value="Gampaha">Gampaha</MenuItem>
      <MenuItem value="Kalutara">Kalutara</MenuItem>
      <MenuItem value="Kandy">Kandy</MenuItem>
      <MenuItem value="Colombo">Matale</MenuItem>
      <MenuItem value="Matale">Colombo</MenuItem>
      <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
      <MenuItem value="Galle">Galle</MenuItem>
      <MenuItem value="Matara">Matara</MenuItem>
      <MenuItem value="Hambantota">Hambantota</MenuItem>
      <MenuItem value="Jaffna">Jaffna</MenuItem>
      <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
      <MenuItem value="Mannar">Mannar</MenuItem>
      <MenuItem value="Vavuniya">Vavuniya</MenuItem>
      <MenuItem value="Mullaitivu">Mullaitivu</MenuItem>
      <MenuItem value="Batticaloa">Batticaloa</MenuItem>
      <MenuItem value="Ampara">Ampara</MenuItem>
      <MenuItem value="Kurunegala">Kurunegala</MenuItem>
      <MenuItem value="Puttalam">Puttalam</MenuItem>
      <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
      <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
      <MenuItem value="Badulla">Badulla</MenuItem>
      <MenuItem value="Moneragala">Moneragala</MenuItem>
      <MenuItem value="Ratnapura">Ratnapura</MenuItem>
      <MenuItem value="Kegalle">Kegalle</MenuItem>
      </Select>
      <button variant='container' className="btn-search">Search</button>
    </Box>
  )
}

export default Search