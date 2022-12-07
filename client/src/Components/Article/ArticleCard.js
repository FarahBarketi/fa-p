import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import {
  del_article,
  edit_article,
  get_articles,
} from "../../Redux/Action/articleAction";
import Modal from "react-bootstrap/Modal";
import AddComment from "../Comment/AddComment";

import Comments from "../Comment/Comments";

import axios from "axios";
import { useRef } from "react";

const UsersCard = ({ el ,added}) => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
const cond1=  user?.role==="user"
const cond2=  user?.role==="vet"
const cond3=  user?.role==="Baladia"
const cond4=  user?.role==="admin"
console.log("added"+added)
const ok1=added==="user"
const ok2=added==="vet"

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(el.title);
  const [price, setPrice] = useState(el.price);
  const [description, setDescription] = useState(el.description);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      edit_article(el._id, { title, price, description, location, image }),
      handleClose()
    );
  };
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const editAddArticle = async (e) => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("image", e.target.files[0]);
    try {
      await axios.put("/articles/uploadimage", data, config);
      dispatch(get_articles());
    } catch (error) {
      console.log(error);
    }
  };
if(cond3){return (
  <div>
   <Card
        className="card-shadow flex-container "
        style={{
          width:"18rem ",

          margin:"50px "
        }}
      >
      <ListGroup variant="flush">
        {/* <Card.Img

        variant="top"
         src=
         {el?.image ? `uploads/${el?.image}`
                    :"https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
        }/> */}
        <Card.Img variant="top" src={el?.image} />
        {/* <ListGroup.Item><img src={el.image} alt="404"/></ListGroup.Item> */}
        <ListGroup.Item>title : {el.title}</ListGroup.Item>
        <ListGroup.Item>price : {el.price}</ListGroup.Item>
        <ListGroup.Item>description : {el.description}</ListGroup.Item>
        <ListGroup.Item>location :{el.location}</ListGroup.Item>

        <ListGroup.Item
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "50px",
            alignItems: "center",
          }}
        >
      

          
          <AddComment id={el._id} />
          
        </ListGroup.Item>
       
      </ListGroup>
    </Card>
  </div>
);}else if(cond2){


  return (
    <div>
      <Card
        className="card-shadow "
        style={{
          width: "20rem",
          margin: " 4rem auto ",
          display: "flex",
      justifyContent:"space-between"
        }}
      >
        <ListGroup variant="flush">
          {/* <Card.Img
          variant="top"
           src=
           {el?.image ? `uploads/${el?.image}`
                      :"https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
          }/> */}
          <Card.Img variant="top" src={el?.image} />
          {/* <ListGroup.Item><img src={el.image} alt="404"/></ListGroup.Item> */}
          <ListGroup.Item>title : {el.title}</ListGroup.Item>
          <ListGroup.Item>price : {el.price}</ListGroup.Item>
          <ListGroup.Item>description : {el.description}</ListGroup.Item>
          <ListGroup.Item>location :{el.location}</ListGroup.Item>

          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "50px",
              alignItems: "center",
            }}
          >
            {ok2===cond2&&(<Button
              variant="danger"
              onClick={() => dispatch(del_article(el._id))}
            >
              <FaTrashAlt />
            </Button>
)}
          {ok2===cond2&&(  <Button variant="warning" onClick={handleShow}>
              <FaRegEdit />
            </Button>)}
            <AddComment id={el._id} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      type="description"
                      placeholder="Enter description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="title"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="location"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="image"
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Button
                      className="btn"
                      onClick={() => inputRef.current.click()}
                    >
                      upload
                    </Button>
                    <input
                      type="file"
                      ref={inputRef}
                      hidden
                      onChange={editAddArticle}
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
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Comments el={el} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
else if(cond1){


  return (
    <div>
      <Card
        className="card-shadow "
        style={{
          width: "20rem",
          margin: " 4rem auto ",
          display: "flex",
      justifyContent:"space-between"
        }}
      >
        <ListGroup variant="flush">
          {/* <Card.Img
          variant="top"
           src=
           {el?.image ? `uploads/${el?.image}`
                      :"https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
          }/> */}
          <Card.Img variant="top" src={el?.image} />
          {/* <ListGroup.Item><img src={el.image} alt="404"/></ListGroup.Item> */}
          <ListGroup.Item>title : {el.title}</ListGroup.Item>
          <ListGroup.Item>price : {el.price}</ListGroup.Item>
          <ListGroup.Item>description : {el.description}</ListGroup.Item>
          <ListGroup.Item>location :{el.location}</ListGroup.Item>

          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "50px",
              alignItems: "center",
            }}
          >
            {ok1===cond1&&(<Button
              variant="danger"
              onClick={() => dispatch(del_article(el._id))}
            >
              <FaTrashAlt />
            </Button>
)}
          {ok1===cond1&&(  <Button variant="warning" onClick={handleShow}>
              <FaRegEdit />
            </Button>)}
            <AddComment id={el._id} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      type="description"
                      placeholder="Enter description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="title"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="location"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="image"
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Button
                      className="btn"
                      onClick={() => inputRef.current.click()}
                    >
                      upload
                    </Button>
                    <input
                      type="file"
                      ref={inputRef}
                      hidden
                      onChange={editAddArticle}
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
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Comments el={el} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}else if(cond4){ return (
  <div>
    <Card
      className="card-shadow "
      style={{
        width: "20rem",
        margin: " 4rem auto ",
        display: "flex",
    justifyContent:"space-between"
      }}
    >
      <ListGroup variant="flush">
        {/* <Card.Img
        variant="top"
         src=
         {el?.image ? `uploads/${el?.image}`
                    :"https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
        }/> */}
        <Card.Img variant="top" src={el?.image} />
        {/* <ListGroup.Item><img src={el.image} alt="404"/></ListGroup.Item> */}
        <ListGroup.Item>title : {el.title}</ListGroup.Item>
        <ListGroup.Item>price : {el.price}</ListGroup.Item>
        <ListGroup.Item>description : {el.description}</ListGroup.Item>
        <ListGroup.Item>location :{el.location}</ListGroup.Item>

        <ListGroup.Item
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "50px",
            alignItems: "center",
          }}
        >
         <Button
            variant="danger"
            onClick={() => dispatch(del_article(el._id))}
          >
            <FaTrashAlt />
          </Button>

         
          <AddComment id={el._id} />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    type="description"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="image"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Button
                    className="btn"
                    onClick={() => inputRef.current.click()}
                  >
                    upload
                  </Button>
                  <input
                    type="file"
                    ref={inputRef}
                    hidden
                    onChange={editAddArticle}
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
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Comments el={el} />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
);}
  // const  comment  = useSelector((state) => state.CommentReducer.comments);
  
};

export default UsersCard;
