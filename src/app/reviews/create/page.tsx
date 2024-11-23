"use client";

import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function ReviewCreate() {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: placeSelectProps } = useSelect({
    resource: "places",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
        <Form.Item
          label={"Место"}
          name={["place", "uuid"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...placeSelectProps}/>
        </Form.Item>
      </Form>
    </Create>
  );
}
