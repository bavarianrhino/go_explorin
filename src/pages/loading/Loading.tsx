import React from 'react';
import { IonProgressBar, IonContent, IonSpinner } from '@ionic/react';

// export const Loading: React.FC = () => (
    export default class Login extends React.Component {
        render(){
            return (
  <IonContent>
      <IonSpinner name="crescent" />
    {/*-- Default Progressbar --*/}
    {/* <IonProgressBar></IonProgressBar><br /> */}

    {/*-- Default Progressbar with 50 percent --*/}
    {/* <IonProgressBar value={0.5}></IonProgressBar><br /> */}

    {/*-- Colorize Progressbar --*/}
    {/* <IonProgressBar color="primary" value={0.5}></IonProgressBar><br /> */}
    {/* <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br /> */}

    {/*-- Other types --*/}
    {/* <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br /> */}
    {/* <IonProgressBar type="indeterminate"></IonProgressBar><br /> */}
    {/* <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br /> */}
  </IonContent>
            )}}

// export default Loading

