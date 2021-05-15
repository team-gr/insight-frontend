import { useState, useEffect } from "react";
import { ItemServices } from "services";

function useItemRelated(itemid = "") {
  const [data, setData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(1);

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
  }, [itemid, refreshKey]);

  function refresh() {
    setRefreshKey(refreshKey + 1);
  }

  return [data, loading, refresh];
}

export default useItemRelated;
