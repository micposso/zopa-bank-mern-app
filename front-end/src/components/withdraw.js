import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Withdraw = () => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Withdraw Money</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ammount to Withdraw</Form.Label>
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

export default Withdraw;
