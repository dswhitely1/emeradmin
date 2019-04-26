import { FETCH_MESSAGES, DELETE_MESSAGE } from './types';
import API from '../api';

export const fetchMessages = () => async dispatch => {
	const response = await API.get('/messages');
	dispatch({ type: FETCH_MESSAGES, payload: response.data });
};

export const deleteMessage = id => async dispatch => {
	const response = await API.delete(`/deletemessage/${id}`);
	dispatch({ type: DELETE_MESSAGE, payload: response.data });
};
