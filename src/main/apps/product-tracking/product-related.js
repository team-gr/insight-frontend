import { useState, useEffect } from "react";
import { Radio, Table } from "antd";

const columns = [];

function ProductRelated() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("sameshop");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
        <Radio.Button value="sameshop">Same Shop</Radio.Button>
        <Radio.Button value="similars">Similars</Radio.Button>
      </Radio.Group>
      <Table
        className="py-2"
        loading={loading}
        bordered={true}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default ProductRelated;
