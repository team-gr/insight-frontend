import React from "react";
import dynamic from "next/dynamic";
import CircularProgress from "components/CircularProgress";

export default function asyncComponent(importComponent) {
  return dynamic(importComponent, {
    loading: () => <CircularProgress />,
  });
}
