import React from "react";
import { Button } from "antd";
import Router from "next/router";

function PermissionDenied() {
  return (
    <div className="gx-login-container">
      <div className="gx-login-content gx-text-center">
        <div className="mb-4 w-full flex justify-center">
          <span className="text=3xl">Permission Denied</span>
        </div>

        <Button type="primary" onClick={() => Router.push("/")}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default PermissionDenied;
