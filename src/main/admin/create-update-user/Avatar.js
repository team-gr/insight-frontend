import { useState } from "react";
import { Upload } from "antd";

import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

import { AVATAR_ROOT_URL } from "app-constants";

function Avatar({ avatar, setAvatar } = {}) {
  const [loading, setLoading] = useState(false);

  function onAvatarChange(info) {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      setLoading(false);
      getBase64(info.file.originFileObj, setAvatar);
    }
  }

  function getAvatarUrl() {
    if (avatar.includes("base64")) {
      return avatar;
    }

    return AVATAR_ROOT_URL + avatar;
  }

  return (
    <Upload
      name="avatar"
      maxCount={1}
      listType="picture-card"
      beforeUpload={beforeUpload}
      showUploadList={false}
      onChange={onAvatarChange}
    >
      {avatar ? (
        <img src={getAvatarUrl()} className="w-full" />
      ) : (
        <UploadButton loading={loading} />
      )}
    </Upload>
  );
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function UploadButton({ loading }) {
  return (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
}
export default Avatar;
