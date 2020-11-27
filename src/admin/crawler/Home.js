import { Col, Divider, Row, Select, Space } from "antd"
import { Option } from "antd/lib/mentions"

const platforms = ["Shopee", "Tiki", "Lazada", "Sendo"]

export default function CrawlerHome() {
    return (
        <Space direction="vertical" size="large" className="container">
            <Divider orientation="left">
                <span className="text-lg">Crawler setting</span>
            </Divider>
            <div className="container">
                <Row align="middle">
                    <Col xs={6}>Platform</Col>
                    <Col xs={18}>
                        <Select style={{ width: 200 }} defaultValue={platforms[0]}>
                            {platforms.map((platform, index) => (
                                <Option value={platform}>{platform}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
            </div>
        </Space>
    )
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}