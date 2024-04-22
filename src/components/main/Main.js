import { Outlet } from "react-router-dom";
import { MainStyled } from "./Main.styled";
import { Suspense } from "react";
import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";

const Main = () => {
  return (
    <MainStyled>
      <Suspense fallback={<LoaderThreeCircles />}>
        <Outlet />
      </Suspense>
    </MainStyled>
  );
};

export default Main;
