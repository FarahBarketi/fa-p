import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { get_current } from "../Redux/Action/authAction";
const UserProfile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const editUserProfile = async (e) => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("image", e.target.files[0]);
    try {
      await axios.put("/users/uploadimage", data, config);
      dispatch(get_current());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "50px" }}>
        <Card.Img
          variant="top"
          src={
            user?.image
              ? `uploads/${user?.image}`
              : "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{user?.name}</Card.Title>
          <Card.Text>{user?.email}</Card.Text>
          <div>
            <Button className="btn" onClick={() => inputRef.current.click()}>
              upload
            </Button>
            <input
              type="file"
              ref={inputRef}
              hidden
              onChange={editUserProfile}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;
