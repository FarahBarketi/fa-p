import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import { add_article, get_articles } from "../../Redux/Action/articleAction";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const AddArticle = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const inputRef=useRef()
  const [file,setFile]=useState (null)
  const editAddArticle=async(e)=>{
  const config={
    headers:{
      token:localStorage.getItem('token')
    }}
    const data=new FormData ()
    data.append("image",e.target.files[0])
    try {
      await axios.put('/articles/uploadimage',data,config)
  dispatch(get_articles())
    }catch (error){
  console.log(error);
      }}
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_article({ title, location, description, price,image,role }),
      handleClose(),
      navigate("/articles")
    );
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add article
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
              <option>choose your role</option>
              <option>article</option>
              <option>dressage</option>
             
            </Form.Select>
            <div>
              <Button className="btn" onClick={()=>inputRef.current.click()}>upload</Button>
                <input type='file' ref={inputRef} hidden
                onChange={editAddArticle}
                />
              </div>
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

export default AddArticle;
