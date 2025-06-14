// BuyNow.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Table, Button } from "react-bootstrap";
import "./Buynow.css";

const Buynow = () => {
  const { state } = useLocation();
  const { service, plan } = state || {};

  if (!plan || !service) {
    return (
      <Card className="invoice-card p-4">
        <Card.Body>
          <h3>No order data found. Please go back and select a plan.</h3>
        </Card.Body>
      </Card>
    );
  }

  // Generate a random invoice number and date
  const invoiceNumber = Math.floor(100000 + Math.random() * 900000);
  const issueDate = new Date().toLocaleDateString();

  return (
    <Card className="invoice-card mx-auto my-5 p-4">
      <Card.Body>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2>Invoice</h2>
            <p><strong>Invoice #:</strong> {invoiceNumber}</p>
            <p><strong>Date:</strong> {issueDate}</p>
          </div>
          <div>
            <h4>Project π</h4>
            <p>1234 Market St.<br />Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Billing Info */}
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h5>Bill To:</h5>
            {/* Replace with real user data or form */}
            <p>Customer Name<br />Email: customer@example.com</p>
          </div>
          <div>
            <h5>Service Details:</h5>
            <p>{service.title}</p>
          </div>
        </div>

        {/* Items Table */}
        <Table bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Plan</th>
              <th>Unit Price</th>
              <th>Duration</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{service.title}</td>
              <td>{plan.plan}</td>
              <td>${plan.price.toFixed(2)}</td>
              <td>1-2 week</td>
              <td>${plan.price.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="text-end"><strong>Subtotal</strong></td>
              <td>${plan.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-end"><strong>Tax (5%)</strong></td>
              <td>${(plan.price * 0.05).toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-end"><strong>Total Due</strong></td>
              <td>${(plan.price * 1.05).toFixed(2)}</td>
            </tr>
          </tfoot>
        </Table>

        {/* Payment Button */}
        <div className="text-end">
          <Button
            variant="primary"
            size="lg"
            onClick={() => alert(`Proceeding to payment of $${(plan.price * 1.05).toFixed(2)}`)}
          >
            Pay Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Buynow;
