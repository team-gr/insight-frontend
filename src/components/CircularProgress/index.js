import React from "react";

export default function CircularProgress({ className }) {
  return (
    <div className={`loader ${className}`}>
      <img src="/images/loader.svg" alt="loader" style={{ height: 60 }} />
    </div>
  );
}
