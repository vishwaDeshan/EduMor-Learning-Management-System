import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material'


const useStyles = makeStyles({
    wrapper: {
        color: "#fff",
        margin:"2px",
        cursor:"pointer",
        borderRadius: "12px",
        padding: "5px 10px",
        backgroundColor: "#7781e1",
        "&:hover": {
            backgroundColor: "#7781b9",
            boxShadow:"0px 5px 25px rgba(0,0,0,0.2)"
        },
        "&:nth-child(odd)": {
            backgroundColor: "#7782f1",
            boxShadow:"0px 5px 25px rgba(0,0,0,0.2)"
        }
    },

})

function JobCard({ title,type, company,closingDate, district }) {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Grid container style={{ borderRadius: "12px" }}>
                <Grid item xs>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant='subtitle2'>{company}</Typography>
                </Grid>
                <Grid item xs>
                    <Grid>{type}</Grid>
                    <Grid>{district}</Grid>
                </Grid>
                <Grid item xs alignItems='flex-end'>
                    <Typography variant='subtitle2'>
                        Closing:
                    </Typography>
                    <Typography>
                        {closingDate}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default JobCard