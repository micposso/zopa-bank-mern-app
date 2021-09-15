import React from "react";
import Card from "react-bootstrap/Card";

const Balance = () => {
  return (
    <Card bg={"success"} text={"light"} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Account Balance</Card.Title>
        <Card.Subtitle className="mb-2">Your Balance is</Card.Subtitle>
        <Card.Text>
      $100.01
        </Card.Text>
        <Card.Link href="/deposit">Deposit Money</Card.Link>
        <Card.Link href="/withdraw">Withdra Money</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Balance;
