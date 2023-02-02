import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import defaultImage from "../../Assets/image3.png";


export default function ExamCard({noOfQuizzes,newExamTitle,examImage}) {
  // let data;
  // switch (type) {
  //   case "card1":
  //     data = {
  //       noOfQuizzes: "12 Quizzes",
  //       newExamTitle: "Sri Lanka Law College Examination",
        
  //     };
  //     break;

  //   case "card2":
  //     data = {
  //       noOfQuizzes: "10 Quizzes",
  //       newExamTitle: "Sri Lanka Foreign Service Examination",
  //     };
  //     break;
  //   case "card3":
  //     data = {
  //       noOfQuizzes: "5 Quizzes",
  //       newExamTitle: "Sri Lanka Bank Examination",
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    <a href="#" style={{textDecoration:'none'}}>
    <Card sx={{ minWidth: 275, maxWidth:300, maxHeight:200 }} style={{ borderRadius: "10px" }}>
      <CardActionArea style={{ height: "200px" }}>
        <CardMedia
          component="img"
          height="100"
          src={examImage?`${examImage}`: `${defaultImage}`}
          alt="SLLC"
          className="examImage"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h12"
            component="div"
            color="#FF7C78"
            className="noOfQuizzes"
          >
            {noOfQuizzes}
          </Typography>
          <Typography
            variant="h8"
            color="#041083"
            fontWeight={500}
            className="newExamTitle"
          >
            {newExamTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}
