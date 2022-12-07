
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaComments } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import CommentList from "./CommentList";

const Comments = ({el},{role}) => {
  const [showResults, setShowResults] =useState(false)
  const onClick = () => setShowResults(!showResults)

  return (
  <div>
    
     <ListGroup.Item style={{ width: "18rem",
      margin: "50px", textAlign: "center"}}>
        <Button  variant="success" type="submit" value="comments" onClick={onClick} ><FaComments/></Button></ListGroup.Item>
     
    { showResults ? <CommentList el={el} role={role}/> : null } 
  </div>
);
 

};

export default Comments;