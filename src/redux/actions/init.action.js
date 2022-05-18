import {INIT} from '../types';

export const initAction = ( data ) => async (dispatch) =>{
  dispatch({
      type: INIT,
      payload: data
  });

}