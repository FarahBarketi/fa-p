
import { Button, Card, Form, ListGroup } from "react-bootstrap";

  
const Usercard = ({ el }) => {
  return (
    <div>
      <div>
        <Card
          style={{
            width: "20rem",
            margin: " 4rem auto ",
            display: "flex",
          }}
        >
          <ListGroup variant="flush">
            <ListGroup.Item>name {el.name}</ListGroup.Item>
            <ListGroup.Item>email {el.email}</ListGroup.Item>

            <ListGroup.Item
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
              <Button className="btn" onClick={()=>inputRef.current.click()}>upload</Button>
                <input type='file' ref={inputRef} hidden
                onChange={(e)=>setFile(e.target.files[0])}
                />
              </div>
              <Button variant="danger">DELETE</Button>
              <Button variant="warning">EDIT</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Usercard;