import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ItSolution.css";
import ima from "../../images/soluation.png"

const ItSolution = () => {
  return (
    <div className="it-solution-section text-white py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Ensuring your Success<br />Through Reliable IT Solution</h2>
          <p className="textfit">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>

        <Row>
          <Col md={6}>
            <div className="image-placeholder mb-4 mb-md-0">
            <img src={ima} alt="" className="imagesize"/>
              
            </div>
          </Col>


          <Col md={6} className="rightsidertext">

            <Card className="text-white card-custom ">
            <Card.Body>
                <Card.Title>LOREM IPSUM</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className="text-white card-custom ">
                    <Card.Body>
                      <Card.Title>LOREM IPSUM</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
                      </Card.Text>
                    </Card.Body>
            </Card>

            <Card className="text-white card-custom ">
                    <Card.Body>
                      <Card.Title>LOREM IPSUM</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
                      </Card.Text>
                    </Card.Body>
                </Card>


            <Card className="text-white card-custom ">
                <Card.Body>
                    <Card.Title>LOREM IPSUM</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
                    </Card.Text>
                </Card.Body>
            </Card>


                  

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItSolution;
