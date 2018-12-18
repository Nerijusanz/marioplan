import { 
    LOADING_START,
    LOADING_STOP,
    PROJECT_CREATE
} from '../types/types';

const loading = (status) => ({ 

    type:(status)? LOADING_START : LOADING_STOP,

});


const projectCreate = (project) => ({ 

    type: PROJECT_CREATE,
    payload:project

});

export const createProject = (project) => (dispatch,getState,{getFirebase,getFirestore}) => {

        const {
            auth:{uid},
            profile:{firstname,lastname}
        } = getState().firebase;   //firebaseReducer

        dispatch(loading(true));
        //TODO: async methology
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorId: uid,
            authorFirstName: firstname,
            authorLastName: lastname,
            createdAt: new Date()
        }).then(()=>{
            dispatch(projectCreate(project));
        }).catch(err=>{
            //TODO: error dispatch
            //dispatch(projectCreateError(err));
            console.log(err);
        });

}