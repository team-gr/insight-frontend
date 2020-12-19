import Layout from "layout";
import UnauthorizedPage from "components/UnauthorizedPage";

export default function securePage(PageContentComponent) {
  return function SecuredPage() {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      return (
        <Layout>
          <PageContentComponent />
        </Layout>
      );
    }

    return <UnauthorizedPage />;
  };
}
