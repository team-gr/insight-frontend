import { Spin } from "antd";

function LoadingPage() {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
}

export default LoadingPage;
