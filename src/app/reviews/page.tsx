"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  ShowButton,
  TextField,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function ReviewList() {
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
          dataIndex="score"
          title={"Оценка"}
          render={(value) => <NumberField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="text"
          title={"Текст"}
          render={(value) => <NumberField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex={['author', 'uuid']}
          title={"UUID автора"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex={['place', 'address']}
          title={"Адрес места"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="createdAt"
          title={"Создано"}
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
