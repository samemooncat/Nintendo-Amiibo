import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #2d3436;
  margin: 40px;
  margin-top: 135px;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  position:relative;
`;

const StyledImage = styled.img`
  width:130px;
  margin-top: 20px;
`;

const StyledTitle = styled.p`
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 1em;
  text-transform: uppercase;
`;

const StyledText = styled.p`
  text-align: center;
  color: white;
`;

const StyledFooterCard = styled.div`
  width: 100%;
  height: 90px;
  background-color: #212121;
  position: absolute;
  bottom: 0;
`;

const Card = ({ charapter, imgUrl, nameSeries }) => {
  return (
    <StyledCard>
      <StyledImage src={imgUrl} alt="" />
      <StyledFooterCard>
        <StyledTitle>{charapter}</StyledTitle>
        <StyledText>{nameSeries}</StyledText>
      </StyledFooterCard>
    </StyledCard>
  );
};

Card.propTypes = {
  charapter: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  nameSeries: PropTypes.string.isRequired,
};

export default Card;
