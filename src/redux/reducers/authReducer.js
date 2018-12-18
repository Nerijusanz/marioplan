import {
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAILURE,

    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAILURE,

    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAILURE,

    AUTH_ERROR
} from "../types/types";


const initialState={
    authSignIn:false,
    authError:null,
    authSignUp:false
};

const authReducer = (state=initialState,action) => {

    switch(action.type){

        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                authSignUp:true  
            }

        case AUTH_SIGNUP_FAILURE:
            return {
                ...state
            }

        case AUTH_SIGNIN_SUCCESS:
            return{
                ...state,
                authSignIn: action.payload,
                authError:null
            }

        case AUTH_SIGNIN_FAILURE:
            return{
                ...state,
                authSignIn: action.payload
            }


        case AUTH_SIGNOUT_SUCCESS:
            return{
                ...state,
                authSignIn: false,
                authError:null
            }
        case AUTH_SIGNOUT_FAILURE:
            return{
                ...state,
                
            }
        case AUTH_ERROR:
            return{
                ...state,
                authError:action.payload
            }
        
        /*
        case ADD_FLASH_MESSAGE:
            return {
                ...state,
                messages:[
                    ...state.messages,
                    {
                        id: shortid.generate(),    
                        type: action.payload.type,
                        message: action.payload.message
                    }]
                 
            }

        case DELETE_FLASH_MESSAGE:
            return {
                //...state,
                //messages: state.messages.filter(msg=>msg.id !== action.payload)
            }
        */
        default:return state;
    }
} 

export default authReducer;