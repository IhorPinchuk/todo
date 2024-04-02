import React from 'react'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '../Error/ErrorMessage';
import { LinkHome, WrapperCenterLinkHome } from '../home/Home.styled';

const ErrorPage = () => {
const location = useLocation();

  return (
    <>
    <ErrorMessage $textAlignCenter error={location.state?.error} />
    <WrapperCenterLinkHome>
        <LinkHome to="/">To home</LinkHome>
      </WrapperCenterLinkHome>
      </>
  )
}

export default ErrorPage