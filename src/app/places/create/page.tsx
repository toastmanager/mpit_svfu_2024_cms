"use client";

import { Create, getValueFromEvent, useForm } from "@refinedev/antd";
import { Form, Input, Upload } from "antd";

export default function UserCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Адрес"}
          name={["address"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Регион"}
          name={["region"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Заголовок"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Описание"}
          name={["description"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Широта"}
          name={["latitude"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Долгота"}
          name={["longitude"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Ограничение по возрасту"}
          name={["minAge"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Изображения"}
          name={["images"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input
              type="file"
              multiple
            />
        </Form.Item>
      </Form>
    </Create>
  );
}
