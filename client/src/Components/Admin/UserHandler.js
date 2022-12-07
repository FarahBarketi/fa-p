import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {deleteusers} from "../../Redux/Action/authAction";

const Userhandler = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      
     
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.role}</td>
          <td><Button
                variant="danger"
                onClick={() => dispatch(deleteusers(user._id))}
              >
                DELETE
              </Button></td>
         
        </tr>
        
      </tbody>
    </Table>
      </div>
    
  );
};

export default Userhandler;