import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import { UserAuthenticatedProvider } from "../context/UserAuthenticatedContext";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import PublicRoutes from "./publicRoutes/PublicRoutes";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const SingleTodoPage = lazy(() => import("./pages/SingleTodoPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <>
      <GlobalStyles />
      <UserAuthenticatedProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<PublicRoutes><AuthPage /></PublicRoutes>} />
            <Route path="/signup" element={<PublicRoutes><AuthPage /></PublicRoutes>} />
            <Route
              path="/todos"
              element={
                <PrivateRoutes>
                  <TodoPage />
                </PrivateRoutes>
              }
            />
            <Route
              path="/todos/:id"
              element={
                <PrivateRoutes>
                  <SingleTodoPage />
                </PrivateRoutes>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoutes>
                  <AboutPage />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to={"/404"} replace={true} />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </UserAuthenticatedProvider>
      <ToastContainer />
    </>
  );
}

export default App;
