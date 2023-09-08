import {Card, Button, Form, Row, Col} from "react-bootstrap"

const productCard = (props) => {
    const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Title>€{product.price}</Card.Title>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default productCard
