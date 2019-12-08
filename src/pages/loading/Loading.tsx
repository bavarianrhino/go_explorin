import React from 'react';
import { IonSpinner } from '@ionic/react';

const Loading: React.FC = () => {
    return (
        <div>
            <IonSpinner color="tertiary" style={{ 'height': '40px', 'width': '40px' }} />
        </div>
    )
}
export default Loading

