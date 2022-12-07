import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/Action/authAction";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, role }), navigate("/login"));
  };

  return (
    <div className="gatous">
      <img
        style={{
          borderRadius: "5px 0   0 5px",
          width: "30rem",
          height: "26rem",
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BwdDupaiSdXBMHVGCHRiWxHX7qihQQdfgT6Nae1sf0VW1u9dMiq8KIPkrSviMitgH9E&usqp=CAU"
      />

      <div>
        <div>
          <Card
            style={{
              borderRadius: " 0 5px 5px 0",
              width: "30rem",
              height: "26rem",
              backgroundColor: "hsl(207,19%,9%)",
              color: "white",
            }}
          >
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "hsl(207,19%,9%)",
                      border: "none",
                      borderBottom: "solid white",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "hsl(207,19%,9%)",
                      border: "none",
                      borderBottom: "solid white",
                      color: "white",
                    }}
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
                    style={{
                      backgroundColor: "hsl(207,19%,9%)",
                      border: "none",
                      borderBottom: "solid white",
                      color: "white",
                    }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>

                <Form.Label>Role</Form.Label>
                <Form.Select
                  onChange={(e) => setrole(e.target.value)}
                  value={role}
                  style={{
                    backgroundColor: "black",
                    border: "0 0 1 solid white 0 ",
                  }}
                  className="hevi"
                >
                  <option>choose your role</option>
                  <option>user</option>
                  <option>Baladia</option>
                  <option>vet</option>
               
                </Form.Select>

                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    width: "10rem",
                    marginLeft: "17rem",
                  }}
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
