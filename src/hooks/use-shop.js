import { useState, useEffect } from "react";
import { StoreServices } from "services";

function useShop(shopid = "") {
  const [shop, setShop] = useState({});
  const [refreshKey, setRefreshKey] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    StoreServices.getShopByID(shopid)
      .then((data) => mounted && setShop(data))
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [shopid]);

  function refresh() {
    setRefreshKey(refreshKey + 1);
  }

  return [shop, loading, refresh];
}

export default useShop;
