import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const withFetch = (action) => (Component) => {
  const Fetch = ({ action, amiibo, loading }) => {
    const [amiiboName, setAmiiboName] = useState("");

    useEffect(() => {
      if (amiiboName) {
        action(amiiboName);
      }
    }, [amiiboName, action]);

    return loading ? (
      <h1>Lok</h1>
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
