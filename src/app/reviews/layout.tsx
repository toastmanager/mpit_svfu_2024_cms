import { Header } from "@components/header";
import { authProviderServer } from "@providers/auth-provider";
import { ThemedLayoutV2 } from "@refinedev/antd";
import { axiosInstance } from "@refinedev/nestjsx-crud";
import { redirect } from "next/navigation";
import React from "react";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log(error);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const token = (await axiosInstance.post("auth/refresh")).data;
        if (token.access_token) {
          localStorage.setItem("accessToken", token.access_token);
        }
      } catch (refreshError) {
        console.log("Token Refresh Failed", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.authenticated) {
    return redirect(data?.redirectTo || "/login");
  }

  return <ThemedLayoutV2 Header={Header}>{children}</ThemedLayoutV2>;
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
  };
}
