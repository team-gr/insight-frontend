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
  const [loading, setLoading] = useState(false)
  const [shop, setShop] = useState({})
  const [products, setProducts] = useState([])
  const [similarShops, setSimilarShops] = useState([])
  const user = useSelector(state => state.auth.user)

  async function handleSearch(shopUrl) {
    try {
      setLoading(true);
      const products = await ShopApi.listShopProducts(shopUrl);
      setProducts(products);

      const res = await ShopApi.searchSimilarShops(shopUrl)
      console.log(res.source_shop)
      setShop(res.source_shop)
      const similarShops = res.matches.map((item, index) => {
        return {
          ...item.target_shop,
          match_num_cat_ratio: item.match_num_cat_ratio,
          match_cat_prod_ratio: item.match_cat_prod_ratio
        }
      })
      setSimilarShops(similarShops);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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

  // async function searchSimilarShops(shopUrl) {
  //   try {
  //     setTabLoading(true);
  //     const res = await ShopApi.searchSimilarShops(shopUrl)
  //     let shops = res.matches.map((item, index) => {
  //       return {
  //         ...item.target_shop,
  //         match_num_cat_ratio: item.match_num_cat_ratio,
  //         match_cat_prod_ratio: item.match_cat_prod_ratio
  //       }
  //     })
  //     // setSourceShop(res.source_shop);
  //     setSimilarShops(shops);
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     setTabLoading(false)
  //   }
  // }

  function changeTab(key) {
    console.log(key)
  }

  return (
    <Context.Provider value={loading, setLoading, submitFollowProducts}>
      <div className="pb-2 px-2 text-lg font-medium text-black">
        Enter shop URL to discover their products, you can add these products to your store
      </div>

      <Search
        placeholder="Shop URL"
        enterButton="Enter"
        size="large"
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e.target.value)}
        onSearch={(value) => handleSearch(value)}
      />

      {loading ?
        <Spinner /> :
        <div className={shop == {} ? "" : "hidden"}>
          <GeneralShopInfo {...shop}/>

          <Tabs defaultActiveKey="1" onChange={changeTab}>
            <TabPane tab="Products" key="1">
              <ShopProducts products={products}/>
            </TabPane>
            <TabPane tab="Similar Shops" key="2">
              <SimilarShops shops={similarShops} />
            </TabPane>
          </Tabs>
        </div>}
    </Context.Provider>
  );
}
