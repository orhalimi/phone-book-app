const newUserId = -1;

const globals = {
  idCounter: 0,
  newUserId,
  newUserBlueprint: {
    [newUserId]: {
      name: '',
      phone: '',
      editMode: true,
      errors: {
        phone: 'The phone number must be between 9 and 12 characters',
        name: 'The name must contain two words',
      },
      displayErrors: false,
      id: newUserId,
    },
  },
};

export default globals;
