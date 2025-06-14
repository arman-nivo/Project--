import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ExclusiveServices.css";
import lefeawwr from "../../images/ElementrightArrow.png";
import laravel from "../../images/laravel.png";
import marne from "../../images/marne.png";
import ai from "../../images/aiproject.png";
import responsiv from "../../images/responsive1.png";
import backend from "../../images/backend .png"
import { useNavigate } from "react-router";

const services = [
  {
    title: "Web Development With LARAVEL",
    img : laravel,
      pricing: [
    { plan: "Basic", price: 199, features: "Landing Page, Contact Form" },
    { plan: "Standard", price: 499, features: "5 Pages, Admin Panel" },
    { plan: "Premium", price: 899, features: "10+ Pages, CMS, API Integration" },
  ],
    text: "Unlock the power of modern PHP development with our Laravel-based web solutions. We build secure, scalable, and high-performing web applications using Laravel — the most popular PHP framework. Whether it's a business website, e-commerce platform, or a custom dashboard, our Laravel development ensures robust architecture, clean code, and seamless performance.",
  },
  {
    title: "Marne Web Development",
    img : marne,
      pricing: [
    { plan: "Basic", price: 199, features: "Landing Page, Contact Form" },
    { plan: "Standard", price: 499, features: "5 Pages, Admin Panel" },
    { plan: "Premium", price: 899, features: "10+ Pages, CMS, API Integration" },
  ],
    text: "We specialize in creating robust, scalable, and visually compelling websites tailored specifically for the maritime industry. From shipping companies and marine logistics to yacht charters and port authorities, our Laravel-powered solutions are designed to streamline operations, enhance user experience, and establish a strong online presence. Our services include real-time tracking integrations, booking systems, fleet management dashboards, and custom CMS platforms. With a deep understanding of marine industry needs, we ensure your digital presence sails smoothly and securely.",
  },
  {
    title: "Thesis Project/ AI Project.",
    img : ai,
      pricing: [
    { plan: "Basic", price: 199, features: "Landing Page, Contact Form" },
    { plan: "Standard", price: 499, features: "5 Pages, Admin Panel" },
    { plan: "Premium", price: 899, features: "10+ Pages, CMS, API Integration" },
  ],
    text: "We offer end-to-end development support for academic thesis and AI-based research projects. From designing machine learning models to deploying full-stack AI applications, we help students and researchers turn ideas into impactful solutions. Our services include data preprocessing, model training, backend APIs, and deployment using cutting-edge technologies like Python, TensorFlow, and Flask or Laravel.",
  },
   {
    title: "Backend Development",
    img : backend,
      pricing: [
    { plan: "Basic", price: 199, features: "Landing Page, Contact Form" },
    { plan: "Standard", price: 499, features: "5 Pages, Admin Panel" },
    { plan: "Premium", price: 899, features: "10+ Pages, CMS, API Integration" },
  ],
    text: "We build secure, scalable, and well-structured backends tailored to your business logic. Whether it's user authentication, database architecture, RESTful APIs, or third-party integrations, we use frameworks like Laravel and Node.js to deliver efficient server-side applications. Our backends are optimized for performance, security, and future expansion.",
  },
   {
    title: "Responsive FrontEnd",
    img : responsiv,
      pricing: [
    { plan: "Basic", price: 199, features: "Landing Page, Contact Form" },
    { plan: "Standard", price: 499, features: "5 Pages, Admin Panel" },
    { plan: "Premium", price: 899, features: "10+ Pages, CMS, API Integration" },
  ],
    text: "Our frontend development ensures your website or application looks great and performs seamlessly on all devices. Using React, Bootstrap, and modern CSS frameworks, we craft user-friendly interfaces that are responsive, fast, and accessible. Every component is built with a mobile-first approach and pixel-perfect design principles.",
  },
  
];

const ExclusiveServices = () => {

    const navigate = useNavigate();

    const hendelexplor = (service) => {
    // You can pass service details via state or context
    navigate("/service-info", { state: { service } });
    };

  return (
    <section className="exclusive-services text-white py-5">
      <Container>
        <Row className="mb-5">
          <Col md={3} style={{textAlign: "left"}}>
            <h6 className="text-pink fw-bold">LOREM IPSUM</h6>
            
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
            </p>
            
          </Col>
          <Col md={7} className="text-md-end" >
            <h2 className="display-6 fw-bold textaligncente" >Exclusive IT Services</h2>
          </Col>

          <Col md={2}>
            <img src={lefeawwr} alt="Right Arroe img" />
          </Col>
         
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <div className="service-card text-center">
                <div className="service-frame ">
                  <img src={service.img} alt="Not Fount"  style={{width:"100%"}}/>
                  
                </div>

                <div className="textbox" style={{padding: "15px 15px 0px 15px", }}>
                    <h5 className="text-pink">{service.title}</h5>
                    <p className="text">
                        {service.text.split(' ').slice(0,30).join(' ')}...
                    </p>

                    <Button onClick={() => hendelexplor(service)}  className=" text-decoration-none buttondeg">
                        Explore
                    </Button>
                </div>
                
              </div>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-center mt-4 pagination-dots">
          <div className="dot" />
          <div className="dot active" />
          <div className="dot" />
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveServices;
