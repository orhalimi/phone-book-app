import React from 'react';
import { connect } from 'react-redux';
import PhoneListItem from './PhoneListItem/MainContainer';

const PhonelistContainer = (props) => {
  const phoneListItems = props.phoneList.map(item => <PhoneListItem {...item} key={item.id} />);
  return (
    <div className="phonelist-container center">{phoneListItems.length > 0 && phoneListItems}</div>
  );
};

const mapStateToProps = state => ({ phoneList: state.phoneList });
const mapDispatchtoProps = dispach => ({});

export default connect(mapStateToProps, mapDispatchtoProps)(PhonelistContainer);
