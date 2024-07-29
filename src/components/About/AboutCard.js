import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samanyu Deghuria </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently a Research Intern  at IEM IEDC Lab, Kolkata.
            <br />
            I am pursuing my BTech in Computer Science and Engineering from IEM, Kolkata.
            <br />
            <br />  
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
