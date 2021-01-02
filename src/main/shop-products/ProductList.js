import { Col, Row, Tag } from "antd"
import { ProductCard } from "./ProductCard"

export default function ProductList({products}) {
    return (
        <div className="p-4">
            <Row>
                {products.map((item, index) => (
                    <Col lg={8} sm={12} xs={24} key={index}>
                        < ProductCard product={item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}