// types.ts
export interface RootState {
    alert: AlertState;
  }
  
  export interface AlertState {
    showAlert: boolean;
    alertType: string;
    alertMessage: string;
  }
  