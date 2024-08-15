import { Spin } from "antd";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/layout/Layout";

const SignIn = lazy(() => import("./views/auth/signIn"));
const SignUp = lazy(() => import("./views/auth/signUp"));
const Forgot = lazy(() => import("./views/auth/forgot"));
const InvalidPage = lazy(() => import("./views/invalidPage"));
const Hours = lazy(() => import("./views/hours"));
const Reports = lazy(() => import("./views/reports"));
const Tasks = lazy(() => import("./views/tasks"));
const People = lazy(() => import("./views/people"));

const Loader = () => {
  return <Spin fullscreen size="large" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "auth/sign-in",
        element: (
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "auth/sign-up",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "auth/forgot",
        element: (
          <Suspense fallback={<Loader />}>
            <Forgot />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Navigate to="/auth/sign-in" />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "hours",
        element: (
          <Suspense fallback={<Loader />}>
            <Hours />
          </Suspense>
        ),
      },
      {
        path: "tasks",
        element: (
          <Suspense fallback={<Loader />}>
            <Tasks />
          </Suspense>
        ),
      },
      {
        path: "people",
        element: (
          <Suspense fallback={<Loader />}>
            <People />
          </Suspense>
        ),
      },
      {
        path: "reports",
        element: (
          <Suspense fallback={<Loader />}>
            <Reports />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <InvalidPage />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
