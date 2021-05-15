import { useState, useEffect } from "react";
import { ItemServices } from "services";

function useItem(itemid = "") {
  const [item, setItem] = useState({});
  const [refreshKey, setRefreshKey] = useState(1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    ItemServices.getItemById(itemid)
      .then((data) => mounted && setItem(data))
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [itemid]);

  function refresh() {
    setRefreshKey(refreshKey + 1);
  }

  return [item, loading, refresh];
}

export default useItem;
