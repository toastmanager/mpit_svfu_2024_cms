"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  ShowButton,
  TextField,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function UserList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="uuid"
          title={"UUID"}
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="email"
          title={"Email"}
          render={(value) => <EmailField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="fullname"
          title={"Fullname"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="createdAt"
          title={"Created At"}
          render={(value) => <DateField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="updatedAt"
          title={"Updated At"}
          render={(value) => <DateField value={value} />}
        ></Table.Column>
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.uuid} />
              <ShowButton hideText size="small" recordItemId={record.uuid} />
              <DeleteButton hideText size="small" recordItemId={record.uuid} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
