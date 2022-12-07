import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useDispatch ,useSelector} from "react-redux";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { del_comment, edit_comment } from "../../Redux/Action/CommentAction";

const UsersCard = ({ comments },{role}) => {
  console.log("coment", comments);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [date, setDate] = useState(comments.date);
  const [body, setBody] = useState(comments.body);
  const user = useSelector((state) => state.authReducer.user);

console.log("comment card"+ user?.role)
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edit_comment(comments._id, { date, body }), handleClose());
  };
  return (
    <div>
      <Card
        style={{
          width: "18rem",

          margin: "50px",
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item>{comments.date} </ListGroup.Item>
          <ListGroup.Item> {comments.body}</ListGroup.Item>
{user?.role!=="Baladia"&&(
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="danger"
              onClick={() => dispatch(del_comment(comments._id))}
            >
              DELETE
            </Button>
            <Button variant="warning" onClick={handleShow}>
              EDIT
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="date"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>body</Form.Label>
                    <Form.Control
                      type="string"
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
                <Button variant="warning" onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </ListGroup.Item>)}
        </ListGroup>
      </Card>
    </div>
  );
};

export default UsersCard;
