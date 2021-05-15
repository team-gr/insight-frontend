import { useState, useEffect } from "react";
import { ItemServices } from "services";

function useItemRelated(itemid = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    ItemServices.getRelatedItems(itemid)
      .then((items) => mounted && setData(items))
      .catch(console.log)
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return [data, loading];
}

export default useItemRelated;
