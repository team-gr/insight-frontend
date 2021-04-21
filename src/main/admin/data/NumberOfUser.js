import { Card } from "antd";

function NumberOfUser() {
  return (
    <Card className="gx-card-widget gx-card-full gx-p-3">
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i
            className="icon icon-auth-screen gx-fs-xlxl  gx-d-flex"
            style={{ fontSize: 45, color: "#F4B400" }}
          />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">2</h1>
          <p className="gx-text-grey gx-mb-0">#User</p>
        </div>
      </div>
    </Card>
  );
}

export default NumberOfUser;
