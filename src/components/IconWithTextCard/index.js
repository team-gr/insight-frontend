import { Card } from "antd";

const IconWithTextCard = ({ icon, iconColor, title, subTitle }) => {
  return (
    <Card className="gx-card-widget gx-card-full gx-p-3 gx-bg-white gx-text-white">
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i
            className={`icon icon-${icon} gx-fs-xlxl gx-text-${iconColor} gx-d-flex`}
            style={{ fontSize: 45 }}
          />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">{title}</h1>
          <p className="gx-text-grey gx-mb-0">{subTitle}</p>
        </div>
      </div>
    </Card>
  );
};

export default IconWithTextCard;
