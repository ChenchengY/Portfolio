import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chencheng </span>
            from <span className="purple"> Shantou, China.</span>
            <br />I am a MSCS(align) student at Northeastern University(Boston).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Post Rock
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work hard! Play hard!"{" "}
          </p>
          <footer className="blockquote-footer">Chencheng</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
