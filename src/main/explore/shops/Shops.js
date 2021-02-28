import React from "react";
import { Input, Tabs } from "antd";
import ProductList from "main/common/products/ProductList";
import Spinner from "components/CircularProgress";
import { useState } from "react";
import ShopApi from "services/shop";
import ProductApi from "services/product";
import { useSelector } from "react-redux";
import GeneralShopInfo from "main/common/shops/GeneralShopInfo";
import SimilarShops from "./SimilarShops";
import shops from "pages/explore/shops";
import ShopProducts from "./ShopProducts";

const { Search } = Input
const { TabPane } = Tabs

export const Context = React.createContext()

export default function Shops() {
  const [products, setProducts] = useState([])
  const [pageLoading, setPageLoading] = useState(false)
  const [tabLoading, setTabLoading] = useState(false)
  const [similarShops, setSimilarShops] = useState([])
  const [shopUrl, setShopUrl] = useState("")
  const user = useSelector(state => state.auth.user)

  async function searchShop(shopUrl) {
    try {
      setPageLoading(true);
      const products = await ShopApi.listShopProducts(shopUrl);
      setProducts(products);
    } catch (err) {
      console.log(err);
    } finally {
      setPageLoading(false);
    }
  }

  async function submitFollowProducts(checkedList) {
    try {
      setTabLoading(true);
      await ProductApi.FollowProducts(user.id, checkedList);
    } catch (err) {
      console.log(err);
    } finally {
      setTabLoading(false);
    }
  }

  async function searchSimilarShops(shopUrl) {
    try {
      setTabLoading(true);
      const res = await ShopApi.searchSimilarShops(shopUrl)
      let shops = res.matches.map((item, index) => {
        return {
          ...item.target_shop,
          match_num_cat_ratio: item.match_num_cat_ratio,
          match_cat_prod_ratio: item.match_cat_prod_ratio
        }
      })
      // setSourceShop(res.source_shop);
      setSimilarShops(shops);
    } catch (err) {
      console.log(err)
    } finally {
      setTabLoading(false)
    }
  }

  function changeTab(key) {
    if(key == "2"){
      searchSimilarShops(shopUrl)
    }
  }

  return (
    <Context.Provider value={pageLoading, setPageLoading, submitFollowProducts}>
      <div className="pb-2 px-2 text-lg font-medium text-black">
        Enter shop URL to discover their products, you can add these products to your store
      </div>

      <Search
        placeholder="Shop URL"
        enterButton="Enter"
        size="large"
        value="https://shopee.vn/tuananh24"
        onKeyDown={(e) => e.key === "Enter" && (setShopUrl(e.target.value) || searchShop(e.target.value))}
        onSearch={(value) => setShopUrl(value) || searchShop(value)}
      />

      {pageLoading ?
        <Spinner /> :
        <div>
          <GeneralShopInfo />

          <Tabs defaultActiveKey="1" onChange={changeTab}>
            <TabPane tab="Products" key="1">
              {tabLoading ? <Spinner /> : <ShopProducts products={products}/>}
            </TabPane>
            <TabPane tab="Similar Shops" key="2">
              {tabLoading ? <Spinner /> : <SimilarShops shops={similarShops} />}
            </TabPane>
          </Tabs>
        </div>}
    </Context.Provider>
  );
}
