import { AnyAction } from 'redux';

export function showAlert(alertType: string, alertMessage: string): AnyAction;

export function hideAlert(): AnyAction;

