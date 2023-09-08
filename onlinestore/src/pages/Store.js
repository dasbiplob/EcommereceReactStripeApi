import { Row, Col } from "react-bootstrap"
import { productList } from "../productsStore"
import productCard from "../component/productCard"

const Store = () => {
  return (
    <div>
      <h1 align="center" className="p-3">Welcome To The Ecommerce Store!</h1>
      <Row xs ={1} md = {3} className="g-4">
        {productList.map((product,idx)=>(   
        <Col align="center" key={idx}>
            
            <productCard product={product}/>
        </Col>
        ))}

      </Row>
    </div>
  )
}

export default Store
