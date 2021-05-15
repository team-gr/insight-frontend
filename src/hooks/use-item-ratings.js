import { useState, useEffect } from "react";
import { ItemServices } from "services";

function useItemRatings(itemid = "") {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    ItemServices.getItemRatings(itemid)
      .then((ratings) => mounted && setRatings(ratings))
      .catch(console.log)
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return [ratings, loading];
}

export default useItemRatings;
