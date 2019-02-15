const initialState = {
  email: '',
  password: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      // return { ...state, email: action.payload }

    default:
      break;

  }
};