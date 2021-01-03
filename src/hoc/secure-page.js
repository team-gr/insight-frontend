import { useSelector } from "react-redux";
import Layout from "layout";
import UnauthorizedPage from "components/UnauthorizedPage";

import isEmpty from "lodash/isEmpty";

const securePage = (PageContentComponent) => {
  return function SecuredPage() {
    const user = useSelector((state) => state.auth.user);

    if (isEmpty(user)) {
      return <UnauthorizedPage />;
    }

    return (
      <Layout>
        <PageContentComponent />
      </Layout>
    );
  };
};

export default securePage;
