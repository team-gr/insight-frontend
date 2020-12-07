import { useRouter } from "next/router";

function ShopeeProduct() {
  const { query } = useRouter();

  return <div>product_id: {query.id}</div>;
}

export default ShopeeProduct;
