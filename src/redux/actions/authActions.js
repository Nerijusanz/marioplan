import { 
    LOADING_START,
    LOADING_STOP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAILURE,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAILURE,
    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAILURE,
    AUTH_ERROR
} from '../types/types';

const authLoading = (status) => ({ 

    type:(status)? LOADING_START : LOADING_STOP,

});

const authSignUp = (status) => ({ 

    type:(status)? AUTH_SIGNUP_SUCCESS : AUTH_SIGNUP_FAILURE,
    payload:status

});

const authSignIn = (status) => ({ 

    type:(status)? AUTH_SIGNIN_SUCCESS : AUTH_SIGNIN_FAILURE,
    payload:status

});

const authSignOut = (status) => ({ 

    type:(status)? AUTH_SIGNOUT_SUCCESS : AUTH_SIGNOUT_FAILURE,

});

const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error
});


export const signIn = (credentials) => (dispatch,getState,{getFirebase}) => {

    const firebase = getFirebase();

    dispatch(authLoading(true));

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(()=>{
        dispatch(authSignIn(true));
        dispatch(authLoading(false))
    })
    .catch(err=>{
        dispatch(authLoading(false));
        dispatch(authSignIn(false));
        dispatch(authError(err.message))
        
    });
    
}

export const signOut = () => (dispatch,getState,{getFirebase}) => {
    
    const firebase = getFirebase();

    dispatch(authLoading(true));

    firebase.auth().signOut().then(()=>{
        dispatch(authLoading(false));
        dispatch(authSignOut(true));
        
    }).catch(err=>{
        dispatch(authLoading(false));
        dispatch(signOut(false));
        dispatch(authError(err.message));
        
    });
    
}



export const signUp = (user) => (dispatch,getState,{getFirebase,getFirestore}) => {

    const userObj = {
        email:user.email,
        password:user.password,
        firstname: capitalizeFirstLetter(user.firstname),
        lastname: capitalizeFirstLetter(user.lastname),
        initials: getFirstLetter(user.firstname)+getFirstLetter(user.lastname)
    };

    
    const firebase = getFirebase();
    const firestore = getFirestore();

    dispatch(authLoading(true));

    firebase.auth().createUserWithEmailAndPassword(

        userObj.email,
        userObj.password

    ).then((response)=>{

        firestore.collection('users').doc(response.user.uid).set({

            firstname:userObj.firstname,
            lastname:userObj.lastname,
            initials: userObj.initials

        }).then(()=>{

            dispatch(authLoading(false));
            dispatch(authSignUp(true));

        })

    }).catch(err=>{

        dispatch(authLoading(false));
        dispatch(authSignUp(false));
        dispatch(authError(err.message));
        
    });
    
}

//-----------------private function----------------
const capitalizeFirstLetter = (s) => {
    
    return s && s[0].toUpperCase() + s.slice(1);
}

const getFirstLetter = (s) => {
    return s && s[0].toUpperCase();
}
//-------------------------------------------------