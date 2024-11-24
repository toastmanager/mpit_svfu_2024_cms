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

export default function PlacesList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={"Id"}
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="address"
          title={"Адрес"}
          render={(value) => <EmailField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="region"
          title={"Регион"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="title"
          title={"Заголовок"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="desciption"
          title={"Описание"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="latLng"
          title={"Координаты"}
          render={(value) => <TextField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="createdAt"
          title={"Создано"}
          render={(value) => <DateField value={value} />}
        ></Table.Column>
        <Table.Column
          dataIndex="updatedAt"
          title={"Обновлено"}
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
