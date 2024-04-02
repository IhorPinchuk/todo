import { Outlet } from "react-router-dom";
import { MainStyled } from "./Main.styled";

const Main = () => {
  return (
    <MainStyled>
        <Outlet />
    </MainStyled>
  )
}

export default Main;