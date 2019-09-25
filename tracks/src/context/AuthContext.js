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
        case 'signup': {
            return {
                errorMessage: '',
                token: action.payload
            }
        }
        default:
            return state

    }
};

const signUp = (dispatch) => async ({email, password}) => {
    try {
        const response = await tracker.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        console.log(response.data.token);
        dispatch({type: 'signup', payload: response.data.token});
        navigate('TrackList');

    } catch (e) {
        dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign up'})
    }

};

const signIn = (dispatch) => {
    return ({email, password}) => {
        //    try to signin
        //    handle success by updating state

        //    handle failure by showing error message (somehow)
    }
};

const signout = (dispatch) => {
    return () => {

    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signUp, signIn, signout},
    {token: null, errorMessage: ''}
);