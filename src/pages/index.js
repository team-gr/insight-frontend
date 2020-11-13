import { useEffect } from "react";
import Router from "next/router";
import CircularProgress from "components/CircularProgress";

export default function Index() {
  useEffect(() => {
    Router.push("/main/search");
  }, []);

  return (
    <div>
      <CircularProgress />
    </div>
  );
}
