// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const LoadingIndicator = (props) => (
    <div>
        {
            props.busy &&
            <h1>LOADING DATA...</h1>
        }
    </div>
);


// CONFIGURE COMPONENT PROP TYPES

LoadingIndicator.propTypes = {
    busy: PropTypes.bool
};


// EXPORT COMPONENT

export { LoadingIndicator };