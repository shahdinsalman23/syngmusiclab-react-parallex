import React from 'react';
import {Card, Button } from 'react-bootstrap';

const PricingCard = ({ title, price, features, bestValue }) => (
  <Card className={`text-center ${bestValue ? 'border-danger' : ''}`} style={{ maxWidth: '343px' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <h3 className="my-4">${price}<span className="text-muted">/month</span></h3>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <Button variant={bestValue ? "danger" : "primary"}>Upgrade</Button>
    </Card.Body>
  </Card>
);


export default PricingCard


