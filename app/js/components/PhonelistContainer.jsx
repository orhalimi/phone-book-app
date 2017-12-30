import React from 'react';
import { connect } from 'react-redux';
import PhoneListItem from './PhoneListItem/MainContainer';

const PhonelistContainer = (props) => {
  const phoneListItems = props.phoneList.map((item) => {
    if (item.editMode) {
      const itemEdits = props.phoneListEdits[item.id];
      return <PhoneListItem {...itemEdits} key={item.id} />;
    }
    return <PhoneListItem {...item} key={item.id} />;
  });
  return (
    <div className="phonelist-container center">{phoneListItems.length > 0 && phoneListItems}</div>
  );
};

const mapStateToProps = state => ({
  phoneList: state.phoneList,
  phoneListEdits: state.phoneListEdits,
});

export default connect(mapStateToProps)(PhonelistContainer);
