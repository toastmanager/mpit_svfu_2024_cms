"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function ReviewEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Оценка"}
          name="score"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Текст отзыва"}
          name={["text"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
}
