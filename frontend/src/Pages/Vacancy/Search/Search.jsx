import React from 'react'
import { Box, Select, MenuItem, makeStyles } from '@material-ui/core'
const useStyles=makeStyles({
  btn:{
    backgroundColor:"#041083",
    outline:"none",
    borderRadius:"12px",
    padding:"5px 40px",
    color:"#fff",
    flex:1,
    "&:hover": {
      color:"#041083",
      fontWeight:"bold",
      backgroundColor: "transparent",
      border:"1px solid ##041083"
    }
    
  },
  wrapper:{
    borderRadius:"12px",
    minWidth:"1000px",
    display:"flex",
    gap:"20px",
    boxShadow:"8px 1px 5px rgba(0.1,0,0,0.1)",
    padding:"5px",
    marginBottom:"15px"
  },
  selectBar:{
    flex:5
  }

});
function Search() {
  const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
      <Select defaultValue="All" className={classes.selectBar}>
      <MenuItem value="All">All Types</MenuItem>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>        
      </Select>
      <Select defaultValue="All" className={classes.selectBar}>
      <MenuItem value="All">All Districs</MenuItem>
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
      <button variant='container' className={classes.btn}>Search</button>
    </Box>
  )
}

export default Search