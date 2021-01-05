import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "layout";
import UnauthorizedPage from "main/unauthorized";
import PermissionDeniedPage from "main/permission-denied";
import LoadingPage from "main/loading";
import isEmpty from "lodash/isEmpty";

import { AuthActions } from "app-redux/auth";

const securePage = ({ roles = [] } = {}) => (PageContentComponent) => {
  return function SecuredPage() {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);

    useEffect(() => {
      if (isEmpty(user)) {
        dispatch(AuthActions.loginWithToken());
      }
    }, []);

    if (loading) {
      return <LoadingPage />;
    }

    if (isEmpty(user)) {
      return <UnauthorizedPage />;
    }

    if (roles.length > 0 && !roles.includes(user.role)) {
      return <PermissionDeniedPage />;
    }

    return (
      <Layout>
        <PageContentComponent />
      </Layout>
    );
  };
};

export default securePage;
