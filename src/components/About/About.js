import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Ajvinder Singh</strong>. I'm from India
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              
              🚀 Passionate MERN Stack Developer | SQL Enthusiast | Ex-SDE at Arachnomesh Technologies
              <br></br>
              <br></br>

              🌐 As a seasoned Software Development Engineer at Arachnomesh Technologies, I specialize in the MERN (MongoDB, Express.js, React, Node.js) stack, bringing innovative solutions to life. My expertise extends to crafting scalable and efficient applications that seamlessly integrate with PostgreSQL.
              <br></br>
              <br></br>
              💡 Key Skills:
              MERN Stack Development
              PostgreSQL Database Management
              Full-Stack Web Development
              Problem-solving and Algorithm Design
              <br></br>
              <br></br>
              🔧 Previous Role:
              At Arachnomesh Technologies, I contribute to cutting-edge projects, leveraging my skills in MERN development and SQL database management. I thrive in dynamic environments, collaborating with cross-functional teams to deliver high-quality software solutions.

              <br></br>
              <br></br>
              👨‍💻 Experience Highlights:
              Having honed my skills through hands-on experience, I've successfully delivered robust and user-centric applications. My commitment to staying abreast of industry trends allows me to implement the latest technologies in my work.

              <br></br>
              <br></br>
              🔗 Let's Connect:
              I'm passionate about technology and always open to networking with fellow professionals, discussing industry trends, and exploring potential collaborations. Let's connect and explore the possibilities!

              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <br /><br />

            {/* <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation> */}


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
