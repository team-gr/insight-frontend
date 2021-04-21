import { useState, useEffect } from "react";
import { Card, Button, notification, message } from "antd";

import { SyncOutlined } from "@ant-design/icons";

import { CountServices, ProxyServices } from "services";

function NumberOfProxy() {
  const [proxyCount, setProxyCount] = useState(0);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      onLoadData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  async function onLoadData() {
    try {
      const counts = await CountServices.countAll();
      console.log(counts);
      setProxyCount(counts.proxies);
    } catch (error) {
      console.log(error);
    }
  }

  async function onUpdate() {
    const done = message.loading("updating proxy ...", 0);
    try {
      await ProxyServices.update();
      await onLoadData();
      message.success("update proxy success!");
    } catch (error) {
      console.log(error);
      message.error("proxy error, please try again");
    } finally {
      done();
    }
  }

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
        <Button icon={<SyncOutlined />} onClick={onUpdate} />
      </div>
    </Card>
  );
}

export default NumberOfProxy;
