import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledCard = styled.div`
    width: 200px;
    height: 300px;
    background-color: #212121;
`;

const StyledText = styled.p`
    text-align: center;
    color: white;
`;

const StyledImage = styled.img`
width: 90%;
`;

const Card = ({charapter, imgUrl, nameSeries}) => {
    return(
    	<StyledCard>
            <StyledImage src={imgUrl} alt=""/>
            <StyledText>{charapter}</StyledText>
            <StyledText>{nameSeries}</StyledText>
        </StyledCard>
    );
};

Card.propTypes = {
    charapter: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    nameSeries: PropTypes.string.isRequired
};

export default Card;