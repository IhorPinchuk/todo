import React from 'react'
import { LinkHome, WrapperCenterLinkHome } from '../home/Home.styled';

const NotFoundPage = () => {
  return (
    <>
    <div style={{color: "red"}}>NotFoundPage</div>
    <WrapperCenterLinkHome>
        <LinkHome to="/">To home</LinkHome>
      </WrapperCenterLinkHome>
      </>
  )
}

export default NotFoundPage;