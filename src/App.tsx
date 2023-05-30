import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert, hideAlert } from './redux/actions/alertActions';
import './index.css'
import { AnyAction } from 'redux';
import { RootState } from './types';

const App = () => {
  const alert = useSelector((state: RootState) => state.alert);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(showAlert('success', 'Ceci est un message de succès.'));
  };

  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Redux Alert</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={handleButtonClick}>
          Afficher l'alerte
        </IonButton>
        {alert.showAlert && (
          <div className={`alert ${alert.alertType}`}>
            <span>{alert.alertMessage}</span>
            <button className="close-button" onClick={handleCloseAlert}>
              &#x2716;
            </button>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default App;
