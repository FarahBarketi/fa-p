import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductsCard = ({el}) => {
  return (
    <div className="hero">
       <Card style={{ width: '20rem',height:"42rem" }}>
      <Card.Img style={{height:"200px"}} variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         {el.info}
        </Card.Text>
        
         
       
        <Button variant="warning">Buy <span>{el.price}</span></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductsCard