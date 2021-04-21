import { useState, useEffect } from "react";
import { Card } from "antd";

import { CountServices } from "services";

function NumberOfProxy() {
  const [proxyCount, setProxyCount] = useState(0);

  useEffect(() => {
    CountServices.countAll()
      .then((counts) => {
        console.log(counts);
        setProxyCount(counts.proxies);
      })
      .catch(console.log);
  }, []);

  return (
    <Card className="gx-card-widget gx-card-full gx-p-3">
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i
            className="icon icon-timeline-with-icons gx-fs-xlxl gx-d-flex"
            style={{ fontSize: 45, color: "#0F9D58" }}
          />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">
            {proxyCount}
          </h1>
          <p className="gx-text-grey gx-mb-0">#Proxy</p>
        </div>
      </div>
    </Card>
  );
}

export default NumberOfProxy;
