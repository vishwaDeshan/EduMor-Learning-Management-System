import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { QuizRestriction, VideoRestriction } from '../RestrictionsMessage/Resctrction';

export default function AccordionExam() {
  return (
    <div>
      <Accordion style={{ margin: '15px', backgroundColor: '#E7ECFC', borderRadius: '10px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography style={{ color: '#041083', fontWeight: '500' }}>1. Level 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="quiz-btn" >
              <Link to='/'><font>1.1 Quiz</font></Link>
              <QuizRestriction />
            </div>
            <div className="video-btn">
              <Link to='/'><font>1.2 Lecture Video</font></Link>
              <VideoRestriction />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}