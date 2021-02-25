import { Col, Row } from "antd"
import ShopCard from "./ShopCard"

export default function ListShops({shops}) {
    return (
        <div className="p-4">
            <Row>
                {shops.map((item, index) => (
                    <Col lg={8} sm={12} xs={24} key={index}>
                        < ShopCard shop={item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}