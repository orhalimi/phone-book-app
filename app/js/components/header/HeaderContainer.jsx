import React from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import AddUserButton from './AddUserButton';
import { toggleAddUserMode, changeSearchTerm } from '../../redux/actionCreators';

const HeaderContainer = props => (
  <div className="header-items-container center">
    <AddUserButton clickHandler={props.toggleAddUserModeHandler} addUserMode={props.addUserMode} />
    <SearchInput searchTerm={props.searchTerm} changeHandler={props.changeSearchTermHandler} />
  </div>
);

const mapStateToProps = state => ({
  addUserMode: state.addUserMode,
  searchTerm: state.searchTerm,
});
const mapDispatchToProps = dispach => ({
  toggleAddUserModeHandler(addUserMode) {
    dispach(toggleAddUserMode(addUserMode));
  },
  changeSearchTermHandler(event) {
    dispach(changeSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
