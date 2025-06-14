import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import CreateEvent from "../Pages/CreateEvent";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import UpcomingEvents from "../Pages/UpcomingEvents";
import LoadingPage from "../Pages/LoadingPage";
import PrivateRoute from "../Provider/PrivateRoute";

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
        element:<PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
      },
      {
        path: "upcoming-events",
        Component: UpcomingEvents,
        loader: ()=> fetch('https://jointly-event-management.vercel.app/events'),
        hydrateFallbackElement: <LoadingPage></LoadingPage>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ],
  },
]);

export default router;
