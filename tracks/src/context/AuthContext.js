import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import {navigate} from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR': {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        case 'signin': {
            return {
                errorMessage: '',
                token: action.payload
            }
        }
        case 'clear_error_message': {
            return {...state, errorMessage: ''}
        }

        case 'signout':
            return {errorMessage: '', token: null};

        default:
            return state

    }
};

const signUp = (dispatch) => async ({email, password}) => {
    try {
        const response = await tracker.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');

    } catch (e) {
        dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign up'})
    }

};

const signIn = (dispatch) => async ({email, password}) => {
    try {
        const response = await tracker.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');

    } catch (e) {
        dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign in'})
    }

};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }

}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signUp, signIn, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);