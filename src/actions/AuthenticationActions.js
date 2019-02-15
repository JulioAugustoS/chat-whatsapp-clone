const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (value) => {
  return {
    type: CHANGE_EMAIL,
    payload: value
  }
}