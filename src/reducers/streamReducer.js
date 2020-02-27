import _ from  'lodash';
import { 
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    CREATE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };   
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload)  //in this case the payload is the id itself, omit creates a new state object without whatever is passed
        default:
            return state;
    }
}

// const streamReducer = { state = {}, action} => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             // const newState = { ...state }
//             // newState[action.payload.id] = action.payli
//             // return newState 
//             // OR

//             return { ...state, [action.payload.id]: action.payload }
//         default:
//             return state
//     }
// }