"use client";
import api from "@lib/api-client";
import type { AuthProvider } from "@refinedev/core";
import Cookies from "js-cookie";

export const authProvider: AuthProvider = {
  login: async ({ email, username, password, remember }) => {
    const token = (await api.post("auth/login", { email, password })).data;
    const user = await api.post(
      "auth/me",
      {},
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    if (user) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 30, // 30 days
        path: "/",
      });
      localStorage.setItem("access_token", token.access_token);
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    Cookies.remove("auth", { path: "/" });
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    console.log("AUTH CHECK");

    const auth = Cookies.get("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    console.log("AUTH GET IDENTITY");
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },
  onError: async (error) => {
    console.log(`AUTH ERROR: ${error.response?.status}`);
    console.log(error);

    if (error.statusCode === 401) {
      const token = (await api.post("auth/refresh")).data;
      const user = await api.get("auth/me", {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      });

      if (user) {
        localStorage.setItem("access_token", token.access_token);
        return {
          logout: false,
        };
      }

      return {
        logout: true,
      };
    }

    return { error };
  },
};
