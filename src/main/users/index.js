import { useState, useEffect } from "react";
import { Card, Table, Button, notification } from "antd";

import AppLink from "components/AppLink";

import { UserServices } from "services";

const columns = [
  { title: "Name", dataIndex: "username" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
  {
    title: "Avatar",
    dataIndex: "avatar",
    render: (avatar) => <img width={50} className="rounded-lg" src={avatar} />,
  },
];

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [uids, setUids] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setTableLoading(true);
      const data = await UserServices.getUsers();
      setUsers(data);
      console.log(data);
    } catch (error) {
      notification["error"]({
        message: "Load users error!",
        description: error,
      });
    } finally {
      setTableLoading(false);
    }
  }

  async function onDelete() {
    try {
      setDeleteLoading(true);
      await Promise.all(uids.map(UserServices.deleteUser));
      notification["success"]({
        message: "Delete success!",
        description: `${uids.length} users deleted`,
      });
      await loadUsers();
    } catch (error) {
      console.log(error);
      notification["error"]({
        message: "Delete users error!",
        description: error,
      });
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <Card title="Users">
      <div className="flex">
        <div className="flex-grow" />
        <Button type="primary">
          <AppLink href="/users/create">ADD</AppLink>
        </Button>
        <Button type="danger" onClick={onDelete} loading={deleteLoading}>
          DELETE
        </Button>
      </div>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        bordered={true}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) => {
            setUids(selectedRowKeys);
          },
        }}
        loading={tableLoading}
      />
    </Card>
  );
}

export default UsersPage;
