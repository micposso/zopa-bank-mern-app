import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// create a function that sums the amount in the form when submitted and adds it to the balance state

const deposit = ({balance}) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Deposit Money</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ammount to Deposit</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Deposit
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default deposit;
