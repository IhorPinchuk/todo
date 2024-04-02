import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Layout from "./components/layout/Layout";
import LoaderThreeCircles from "./components/loaders/loaderThreeCircles/LoaderThreeCircles";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const TodoPage = lazy(() => import("./components/pages/TodoPage"));
const SingleTodoPage = lazy(() => import("./components/pages/SingleTodoPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));


function App() {
  return (
    <>   
    <GlobalStyles />   
    <Suspense fallback={<LoaderThreeCircles />}>  
      <Routes>
        <Route path="/" element = {<Layout />} >
        <Route index element = {<HomePage />} />
        <Route path="/todos" element = {<TodoPage />} />
        <Route path="/todos/:id" element = {<SingleTodoPage />} />
        <Route path="/about" element = {<AboutPage />} />
        </Route>
        <Route path="/error-page" element = {<ErrorPage />} />
        <Route path="*" element = {<Navigate to={"/404"} replace />} />
        <Route path="/404" element = {<NotFoundPage />} />
        </Routes>    
        </Suspense>   
      </>   
  );
}

export default App;
