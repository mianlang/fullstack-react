/*
 * @file component CreateBar
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

function CreateBar({ onClick }) {
  return (
    <button
      href="#"
      onClick={onClick}
      className="list-group-item create-bar-component"
    >
      + 创建新的文章
    </button>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
