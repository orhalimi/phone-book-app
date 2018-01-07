import React from 'react';

class AddUserButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.props.clickHandler);
    this.props.clickHandler(this.props.addUserMode);
  }

  render() {
    return (
      <button className="no-button-style add-user-image" onClick={this.onClick}>
        <i className="fas fa-user-plus light-oppasity" />
      </button>
    );
  }
}

export default AddUserButton;
