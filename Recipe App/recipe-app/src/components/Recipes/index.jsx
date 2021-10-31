import "./recipies.scss";
import Image from "./images/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
const Recipies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  const renderedCards = [1, 2, 3].map((card) => {
    return (
      <Card onClick={handleShow} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Recipe {card}</Card.Title>
          <Card.Text>{card} recipe short description</Card.Text>
          <Button onClick={handleShow} variant="primary">
            Detailed Description
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="RecipiesContainer">
      <div className="flex-display">
        <h1>Recipies</h1>
        <Button variant="primary" onClick={handleShowForm}>
          Add Recipe
        </Button>
      </div>
      <div className="RecipiesCards">{renderedCards}</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Detailed description about the food</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Recipe name</Form.Label>
            <Form.Control type="text" placeholder="Chicken Masala" />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="It is easy to make you should know it"
            />
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recipies;
