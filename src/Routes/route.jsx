import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import CreateEvent from "../Pages/CreateEvent";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/create-event",
        Component: CreateEvent,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);

export default router;
