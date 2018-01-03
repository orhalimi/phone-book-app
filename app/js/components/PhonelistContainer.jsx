import React from 'react';
import { connect } from 'react-redux';
import PhoneListItem from './PhoneListItem/MainContainer';
import globals from '../globals';

const PhonelistContainer = (props) => {
  const newUserProps = props.phoneListEdits[globals.newUserId];
  const newContactComponent = (
    <PhoneListItem addUserMode={props.addUserMode} {...newUserProps} key={globals.newUserId} />
  );

  const phoneListItems = props.phoneList.map((item) => {
    if (item.editMode) {
      const itemEdits = props.phoneListEdits[item.id];
      return <PhoneListItem {...itemEdits} key={item.id} />;
    }
    return <PhoneListItem {...item} key={item.id} />;
  });
  return (
    <div className="phonelist-container center">
      {props.addUserMode && newContactComponent} {phoneListItems.length > 0 && phoneListItems}
    </div>
  );
};

const mapStateToProps = state => ({
  phoneList: state.phoneList,
  phoneListEdits: state.phoneListEdits,
  addUserMode: state.addUserMode,
});

export default connect(mapStateToProps)(PhonelistContainer);
