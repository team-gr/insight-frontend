import Layout from "layout";
import asyncComponent from "hoc/async-component";

const Home = asyncComponent(() => import("main/Home"));

export default function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
