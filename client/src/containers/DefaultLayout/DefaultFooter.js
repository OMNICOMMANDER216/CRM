import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultFooter = ({ children, ...attributes }) =>
// eslint-disable-next-line
    // const  = this.props;

  (
    <React.Fragment>
      <span>
        <a href="https://www.omnicommander.com/" target="_blank" rel="noopener noreferrer">OMNICOMMANDER</a>

&copy;

      </span>
      <span className="ml-auto">
Powered by
        <a href="https://www.omnicommander.com/" target="_blank" rel="noopener noreferrer"> OMNICOMMANDER</a>
      </span>
    </React.Fragment>
  );
DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
