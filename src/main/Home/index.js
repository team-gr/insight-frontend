import { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("zozo");
  });
  return <div className="text-xl">Hello World</div>;
}

export default Home;
