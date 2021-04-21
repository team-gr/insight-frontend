import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loading from "components/CircularProgress";

function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user.role === "admin") {
      router.push("/data");
      return;
    }

    router.push("/competitor-products");
  }, []);

  return <Loading />;
}

export default Home;
