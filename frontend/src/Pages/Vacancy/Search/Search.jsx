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
      <MenuItem value="All">All</MenuItem>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>        
      </Select>
      <button variant='container' className={classes.btn}>Search</button>
    </Box>
  )
}

export default Search