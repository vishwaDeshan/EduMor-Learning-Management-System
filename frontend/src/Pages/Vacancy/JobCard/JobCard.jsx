import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import './JobCard.css'

function JobCard({ title,type, company,closingDate, district }) {
   
    return (
        <Box className="wrapper">
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