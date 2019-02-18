const initialState = {
  name: '',
  email: '',
  password: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME': 
      return { ...state, name: action.payload }
    case 'CHANGE_EMAIL':
      return { ...state, email: action.payload }
    case 'CHANGE_PASSWORD':
      return { ...state, password: action.payload }
    case 'USER_REGISTER_ERROR':
      return { ...state, error: action.payload}
    case 'USER_REGISTER_SUCCESS':
      return { ...state, name: '', password: '', error: '' }
    default:
      return state
  }
};