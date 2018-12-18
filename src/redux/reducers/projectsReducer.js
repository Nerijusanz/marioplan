import { 
    PROJECT_CREATE
} from '../types/types';

const initialState={
    projects:[],
    project:{}
};

const projectsReducer = (state=initialState,action) => {

    switch(action.type){
        
        case PROJECT_CREATE:
            return {
                ...state,
                projects:[
                    ...state.projects,action.payload
                ]
                 
            }
        /*
        case PROJECT_DELETE:
            return {
                ...state,
                projects: state.projects.filter(project=>project.id !== action.payload)
            }
        */
        default:
            return state;
    }
} 

export default projectsReducer;