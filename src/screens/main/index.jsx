import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { amiiboRequest } from "../../store/actions/index";

import Card from "../../components/card/index";

import withFetch from "../../HOCs/fetch/index";

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  position: absolute;
  top: 90px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
  background-color: #212121;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  height: 40px;
  border: none;
  padding-left: 10px;
  width: 200px;
`;

const StyledContainerSearch = styled.div`
  width: 100%; 
  height: 80px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: relative;
  margin-top: 140px;
`;

const StyledSearchButton = styled.button`
  width: 200px;
  border-radius: 5px;
  border: none;
  background-color: #e74c3c;
  color: white;
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
`;

const Main = ({ amiibo, setAmiiboName }) => {
  const [inputAmiibo, setInputAmiibo] = useState("");

  return (
    <div>
      <StyledContainerSearch>
        <StyledInput
          value={inputAmiibo}
          placeholder="Search an amiibo like 'peach'"
          onChange={(event) => setInputAmiibo(event.target.value)}
        />
        <StyledSearchButton onClick={() => setAmiiboName(inputAmiibo)}>
          Search
        </StyledSearchButton>
      </StyledContainerSearch>
      <StyledContainer>
        {amiibo.length ? (
          amiibo.map((amiibo, amiiboIndex) => (
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
    </div>
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
