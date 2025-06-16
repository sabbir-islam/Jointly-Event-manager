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
import EventDetail from "../Pages/EventDetail";
import ManageEvent from "../Pages/ManageEvent";
import EditEvent from "../Pages/EditEvent";
import JoinedEvents from "../Pages/JoinedEvents";

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
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      
      {
        path: "/upcoming-events",
        Component: UpcomingEvents,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const search = url.searchParams.get("search") || "";
          const eventType = url.searchParams.get("eventType") || "";

          let apiUrl = `https://jointly-event-management.vercel.app/events?`;
          if (search) apiUrl += `search=${encodeURIComponent(search)}&`;
          if (eventType)
            apiUrl += `eventType=${encodeURIComponent(eventType)}&`;

          const res = await fetch(apiUrl);
          if (!res.ok)
            throw new Response("Failed to load events", { status: res.status });
          return res.json();
        },
        hydrateFallbackElement: <LoadingPage />,
      },
      {
        path: "/upcoming-events/:id",
        loader: ({ params }) =>
          fetch(
            `https://jointly-event-management.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EventDetail></EventDetail>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/my-events",
        loader: () =>
          fetch("https://jointly-event-management.vercel.app/events"),
        element: (
          <PrivateRoute>
            <ManageEvent></ManageEvent>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/my-events/:id",
        loader: ({ params }) =>
          fetch(
            `https://jointly-event-management.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EditEvent></EditEvent>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/joined-events/:email",
        loader: ({ params }) =>
          fetch(
            `https://jointly-event-management.vercel.app/joined-events/${params.email}`
          ),
        element: (
          <PrivateRoute>
            <JoinedEvents></JoinedEvents>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
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
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
