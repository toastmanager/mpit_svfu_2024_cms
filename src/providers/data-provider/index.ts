"use client";

import dataProviderNestjsxCrud from "@refinedev/nestjsx-crud";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
// const API_URL = "https://api.nestjsx-crud.refine.dev";

export const dataProvider = dataProviderNestjsxCrud(API_URL);
