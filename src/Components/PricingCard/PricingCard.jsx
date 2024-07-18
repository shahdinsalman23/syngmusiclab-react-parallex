import React from 'react';
import {Card, Button } from 'react-bootstrap';

const PricingCard = ({ title, price, features, bestValue, originalPrice , index}) => (
  <Card className={`text-center ${bestValue ? 'border-danger' : ''}`} style={{ maxWidth: '343px' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <h3 className="my-4"><h6>{originalPrice}</h6> ${price}<span className="text-muted">/month</span></h3>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index} className="mb-2"><input type="checkbox" class="ui-checkbox"/> {feature}</li>
        ))}
      </ul>
      

 
      {index !== 0 && <Button variant={bestValue ? "danger" : "primary"}>Upgrade</Button>}

      
    </Card.Body>
  </Card>
);


export default PricingCard


