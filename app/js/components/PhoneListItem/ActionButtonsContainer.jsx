import React from 'react';
import PropTypes from 'prop-types';

const ActionButtonContainer = (props) => {
  if (!props.editMode) {
    return (
      <div className={props.className}>
        <div>
          <button onClick={props.PencilClickHandle} className="no-button-style">
            <i className="fas fa-pencil-alt oppasity" />
          </button>
        </div>
        <div>
          <button onClick={props.trashClickHandle} className="no-button-style">
            <i className="fas fa-trash-alt oppasity" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={props.className}>
      <div>
        <button onClick={props.xClickHandler} className="no-button-style">
          <i className="fas fa-times oppasity" />
        </button>
      </div>
      <div>
        <button onClick={props.vClickHandler} className="no-button-style">
          <i className="fas fa-check oppasity" />
        </button>
      </div>
    </div>
  );
};

export default ActionButtonContainer;

ActionButtonContainer.propTypes = {
  className: PropTypes.string.isRequired,
};
