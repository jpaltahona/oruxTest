import {INIT} from '../types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT :
            return  action.payload;
        default: return state
    }
};