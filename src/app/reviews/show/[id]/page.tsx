"use client";

import { DateField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function ReviewShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  // TODO: Add places
  // const { data: placeData, isLoading: placeIsLoading } = useOne({
  //   resource: "places",
  //   id: record?.place?.id || "",
  //   queryOptions: {
  //     enabled: !!record,
  //   },
  // });

  const { data: authorData, isLoading: authorIsLoading } = useOne({
    resource: "users",
    id: record?.author?.uuid || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"UUID"}</Title>
      <TextField value={record?.uuid} />
      <Title level={5}>{"Оценка"}</Title>
      <TextField value={record?.score} />
      <Title level={5}>{"Текст отзыва"}</Title>
      <TextField value={record?.text} />
      <Title level={5}>{"Место"}</Title>
      <TextField value={record?.place?.id} />
      <Title level={5}>{"Автор"}</Title>
      <TextField value={
          authorIsLoading ? <>Loading...</> : <>{authorData?.data?.fullname}</>
        } />
      <Title level={5}>{"Дата создания"}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
}
