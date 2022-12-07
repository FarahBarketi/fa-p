import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";

import { add_comment } from "../../Redux/Action/CommentAction";
import { FaRegCommentDots } from "react-icons/fa";

const AddComment = ({ id }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_comment(id, { date, body }), handleClose());
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <FaRegCommentDots />
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="String"
                placeholder="body"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddComment;
