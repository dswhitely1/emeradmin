import { FETCH_MESSAGES, DELETE_MESSAGE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_MESSAGES:
			return {
				ml : action.payload,
			};
		case DELETE_MESSAGE:
			return state;
		default:
			return state;
	}
};
