import React from 'react';
import PropTypes from 'prop-types';

const name = (props) => {
    return(
    	<div>name</div>
    );
};

name.propTypes = {
    props: PropTypes.object.isRequired
};

export default name;