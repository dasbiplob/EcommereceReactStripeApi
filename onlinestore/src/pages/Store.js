import { Row, Col } from "react-bootstrap"
import { productList } from "../ProductsStore"
import ProductCard from "../component/ProductCard"


const Store = () => {
  return (
    <div>
      <h1 align="center" className="p-3">Welcome To The Ecommerce Store!</h1>
      <Row xs ={1} md = {3} className="g-4">
        {productList.map((product,idx)=>(   
        <Col align="center" key={idx}>
            
            <ProductCard product={product}/>
        </Col>
        ))}

      </Row>
    </div>
  )
}

export default Store
