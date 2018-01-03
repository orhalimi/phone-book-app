import React from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import AddUserButton from './AddUserButton';
import { toggleAddUserMode } from '../../redux/actionCreators';

const HeaderContainer = props => (
  <div className="header-items-container center">
    <AddUserButton clickHandler={props.toggleAddUserModeHandler} addUserMode={props.addUserMode} />
    <SearchInput />
  </div>
);

const mapStateToProps = state => ({
  addUserMode: state.addUserMode,
});
const mapDispatchToProps = dispach => ({
  toggleAddUserModeHandler(addUserMode) {
    dispach(toggleAddUserMode(addUserMode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
