import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { amiiboRequest } from "../../store/actions/index";

import Card from "../../components/card/index";

import withFetch from "../../HOCs/fetch/index";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 30px;
`;

const Main = ({ amiibo, setAmiiboName }) => {
  useEffect(() => {
    setAmiiboName("peach");
  }, [setAmiiboName]);

  return (
      <StyledContainer>
        {amiibo.length ? (
          amiibo.map((amiibo, amiiboIndex) => (
            // console.log(amiibo)
            <Card
              key={amiiboIndex}
              charapter={amiibo.name}
              imgUrl={amiibo.image}
              nameSeries={amiibo.gameSeries}
            />
          ))
        ) : (
          <h1>No results</h1>
        )}
      </StyledContainer>
  );
};

Main.defaultProps = {
  amiibo: [],
};

Main.propTypes = {
  amiibo: PropTypes.array,
  setAmiiboName: PropTypes.func.isRequired,
};

export default withFetch(amiiboRequest)(Main);
