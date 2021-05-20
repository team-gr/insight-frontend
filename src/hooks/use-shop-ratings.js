import { useState, useEffect } from "react";
import { StoreServices } from "services";

function useShopRatings(shopid = "") {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    StoreServices.getRatings(shopid)
      .then((ratings) => mounted && setRatings(ratings))
      .catch(console.log)
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return [ratings, loading];
}

export default useShopRatings;
