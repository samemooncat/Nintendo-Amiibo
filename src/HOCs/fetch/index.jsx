import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Styleddk = styled.h1`
  color: #212121;
  margin-top: 350px;
`;

const withFetch = (action) => (Component) => {
  const Fetch = ({ action, amiibo, loading }) => {
    const [amiiboName, setAmiiboName] = useState("");

    useEffect(() => {
      if (amiiboName) {
        action(amiiboName);
      }
    }, [amiiboName, action]);

    return loading ? (
      <Styleddk>Loading...</Styleddk>
    ) : (
      <Component setAmiiboName={setAmiiboName} amiibo={amiibo}></Component>
    );
  };

  const mapStatetoProps = (state) => {
    const {
      amiibo: { data, loading },
    } = state;
    return { amiibo: data, loading };
  };

  return connect(mapStatetoProps, { action })(Fetch);
};

export default withFetch;
