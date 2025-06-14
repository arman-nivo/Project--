// ServiceDetails.js
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { state } = useLocation();
  const service = state?.service;
  const navigate = useNavigate();

  if (!service) {
    return (
      <Card className="my-5 p-4">
        <Card.Body>
          <h3>No service data found. Please go back and select a service.</h3>
        </Card.Body>
      </Card>
    );
  }

  const handleOrder = (plan) => {
    // navigate to /buynow, passing both the service and selected plan
    navigate("/buynow", { state: { service, plan } });
  };

  return (
    <Card className="serviceditalse p-4 text-white">
      <Card.Body style={{ paddingBottom: "15%" }}>
        <img src={service.img} alt="" style={{ width: "300px" }} />
        <h2>{service.title}</h2>
        <p className="text-white">{service.text}</p>

        <h4 className="mt-4">Pricing</h4>
        <Row>
          {service.pricing.map((plan, idx) => (
            <Col md={4} key={idx}>
              <Card className="mb-3 border-primary">
                <Card.Body>
                  <Card.Title>{plan.plan}</Card.Title>
                  <Card.Text>{plan.features}</Card.Text>
                  <Card.Text
                    style={{
                      padding: "10px 10px",
                      backgroundColor: "#49e449",
                      fontSize: "24px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                    }}
                  >
                    <strong>Price:</strong> ${plan.price}
                  </Card.Text>
                  <Button
                    variant="success"
                    style={{
                      color: "#ffffff",
                      fontSize: "24px",
                      fontWeight: "bolder",
                      border: "none",
                      padding: "20px 31%",
                      borderRadius: "24px",
                    }}
                    onClick={() => handleOrder(plan)}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetails;
