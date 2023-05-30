export const showAlert = (type, message) => ({
    type: 'SHOW_ALERT',
    payload: { type, message }
  });
  
  export const hideAlert = () => ({
    type: 'HIDE_ALERT'
  });
  