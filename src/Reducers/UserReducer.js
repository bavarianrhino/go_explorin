export const UserReducer = (

	state = {
        loading: false,
        userSession: null,
        longitude: null,
        latitude: null
        
	}, action) => {

        switch (action.type) {
            case 'SET_USER_DATA':
                return { ...state, userSession: action.userData }

			default:
				return state;
		}
};