import React from "react";
import "./MidSec.css";
import Examcard from "../../../Components/ExamCard/ExamCards";
import LandingCard from "../../../Components/LandingCards/LandingCard";
import cardImg1 from "../../../Assets/CardImg1.jpg"

export default function MidSec() {
  return (
    <div className="MidContainer">
      <div className="firstsection">
        <text className="firstsectionhead">Features________</text>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          excepturi maxime repudiandae facere, provident, eligendi soluta
          expedita voluptas dignissimos commodi atque, magni voluptatum officia
          animi earum et quis quaerat!
        </h6>
        <div className="firstCard">
          <LandingCard
            firstTitle="Choosing any Examination"
            secondText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          excepturi maxime repudiandae facere, provident, eligendi soluta
          expedita"
          />
          <LandingCard
            firstTitle="Attempting Quizzes"
            secondText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          excepturi maxime repudiandae facere, provident, eligendi soluta
          expedita"
          />
          <LandingCard
            firstTitle="Downloading Past Papers"
            secondText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          excepturi maxime repudiandae facere, provident, eligendi soluta
          expedita"
          />
        </div>

        <div>
          <text className="secondsectionhead">Examinations________</text>
        

        <div className="secondCard">
          <LandingCard 
            img="cardImg1"
            />
          <LandingCard
            img="cardImg1"
            />
          <LandingCard
            img="cardImg1"
            />
        </div>
        </div>
      </div>
    </div>
  );
}
