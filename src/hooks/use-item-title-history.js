import { useState, useEffect } from "react";
import { HistoryServices } from "services";

function useItemTitleHistory(itemid = "") {
  const [history, setHistory] = useState([]);
  const [refreshKey, setRefreshKey] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    HistoryServices.getItemNameHistory(itemid)
      .then((data) => mounted && setHistory(data))
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [refreshKey, itemid]);

  function refresh() {
    setRefreshKey(refreshKey + 1);
  }

  return [history, loading, refresh];
}

export default useItemTitleHistory;
