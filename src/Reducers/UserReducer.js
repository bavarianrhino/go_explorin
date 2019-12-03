import { appConfig } from '../utils/constants'; //appConfig
import { UserSession } from 'blockstack'

export const UserReducer = (

	state = {
        loading: false,
        user: null,
        longitude: null,
        latitude: null,
        userSession: new UserSession({ appConfig })
        
	}, action) => {

        switch (action.type) {
            // case 'SET_USER_DATA':
                // return { ...state, userSession: action.userData }

			default:
				return state;
		}
};