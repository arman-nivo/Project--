import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Bannar.css'
import imgbanner from "../../images/banner.png"

const Bannar = () => {
  return (
    <Container fluid className="bg-dark text-white tech-bg">
      <Row className="align-items-center">
        <Col  className="text-center text-md-start " style={{  padding: "4% 5%"}}>
          <h1 className="display-4 fw-bold">
            WE CONVERT<br />
            CONCEPTS <span className="text-pink">INTO</span><br />
            <span className="text-pink">TECHNOLOGY</span>
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <button  className="btn-tech">ENROLL NOW</button>
            <button  className="btn-tech2">MORE INFORMATION</button>
          </div>
        </Col>

        <Col className=" mt-md-0">
          <div className="bg-transparent border-0" style={{padding: "7% 4%"}}>
            <Card.Img style={{width: "43em",height: "37em"}}
              
              src= {imgbanner}
              className="img-fluid rounded sci-fi-frame"
              alt="Tech Image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bannar;
