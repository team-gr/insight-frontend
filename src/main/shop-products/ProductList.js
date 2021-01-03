import { Button, Checkbox, Col, Row, Tag } from "antd"
import { useState } from "react";
import { ProductCard } from "./ProductCard"

export default function ProductList({ products, hasSelect }) {
    const [checkedList, setCheckedList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    let productIds = products.map(product => product.id);

    const onChange = e => {
        let value = e.target.value;
        console.log(value, e.target.checked);
        let index = checkedList.indexOf(value);
        let selected = checkedList;
        if (e.target.checked) {
            index == -1 && selected.push(value);
        } else {
            if (checkAll) {
                setCheckeAll(false);
            }
            index != -1 && selected.splice(index, 1);
        }
        console.log(selected);
        setCheckedList(selected);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? productIds : []);
        setCheckAll(e.target.checked);
    }

    return (
        <div className="p-4">
            {
                hasSelect ? (
                    <div class="flex justify-between">
                        <Checkbox onChange={onCheckAllChange} checked={checkAll}>Select all</Checkbox>
                        <Button>Save</Button>
                    </div>
                ) : (
                        <div></div>
                    )
            }
            <Row>
                {products.map((item, index) => (
                    <Col lg={6} sm={12} xs={24} key={index}>
                        < ProductCard product={item} heading={
                            hasSelect ? (
                                <div className="pb-1">
                                    <Checkbox value={item.id} onChange={onChange}></Checkbox>
                                </div>
                            ) : (
                                    <div></div>
                                )
                        } />
                    </Col>
                ))}
            </Row>
        </div>
    )
}