import axios from "../../axiosApi";
import { CHANGE_MESSAGE_INPUT_VALUE, FETCH_GET_MESSAGES_ERROR, FETCH_GET_MESSAGES_SUCCESS } from "../actionTypes";


export const changeMessageInput = value => {
    return { type: CHANGE_MESSAGE_INPUT_VALUE, value };
};


export const fetchGetMessagesSuccess = messages => {
    return { type: FETCH_GET_MESSAGES_SUCCESS, messages };
};

export const fetchGetMessagesError = error => {
    return { type: FETCH_GET_MESSAGES_ERROR, error };
};

export const fetchGetMessages = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/messages/');
            dispatch(fetchGetMessagesSuccess(response.data));
        } catch (e) {
            dispatch(fetchGetMessagesError(e))
        };
    };
};