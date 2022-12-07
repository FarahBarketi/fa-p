import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/authAction";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };
  return (
    <div className="gatous">
      <img style={{
          borderRadius:"5px 0   0 5px",
          width: "30rem",
          height:"25rem",
        }} src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9" alt="katous"/>
      <Card
        style={{
          borderRadius:" 0 5px 5px 0",
          width: "30rem",
          height:"25rem",
          backgroundColor:"hsl(207,19%,9%)",
          color:"white"
        }}
      >
        
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                style={{backgroundColor:"hsl(207,19%,9%)",border:"none",borderBottom: "solid white",color:"white"}}
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
               style={{backgroundColor:"hsl(207,19%,9%)",border:"none",borderBottom: "solid white",color:"white"}}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="warning"
              type="submit"
              style={{
                width: "10rem",
                marginLeft: "17rem",
              }}
              onClick={handlelogin}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;