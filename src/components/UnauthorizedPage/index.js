import React from "react";
import { Button } from "antd";
import Router from "next/router";

function UnauthorizedPage() {
  return (
    <div className="gx-login-container">
      <div className="gx-login-content gx-text-center">
        <div className="mb-4 w-full flex justify-center">
          <img src="/images/unauthorized.png" style={{ width: 200 }} />
        </div>

        <Button type="primary" onClick={() => Router.push("/signin")}>
          Go to Signin Page
        </Button>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
