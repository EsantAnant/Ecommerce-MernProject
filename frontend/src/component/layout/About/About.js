import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/esant-kumar-6335a91a9";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            
            <Typography>Esant Kumar</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a Ecommerce website made by Esant Kumar.
              To create this website I used Mongodb,Express.js,React.js and Node.js. 

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My LinkedIn Profile</Typography>
            <a
              href="https://www.linkedin.com/in/esant-kumar-6335a91a9"
              target="blank"
            >
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
