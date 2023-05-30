import { AlertState } from './alerteType';



const initialState = AlertState;

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.type,
        alertMessage: action.payload.message
      };
    case 'HIDE_ALERT':
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
