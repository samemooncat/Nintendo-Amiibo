import React from "react"; 

import logo from "../../assets/logo.png";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

const Header = () => {
  return (
    <StyledContainer>
      <img src={logo} alt="amiibo logo"/>
    </StyledContainer>
  );
};


export default Header;
