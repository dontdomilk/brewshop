import restService from '../../services/rest_service';
import * as actionTypes from './action-types';
import Mapper from './mapper';


export const getBeers = (filters) => async (dispatch) => {
    dispatch({type: actionTypes.TOGGLE_LOADING})
    const response = await restService.get('/beers');

    if (response) {

        dispatch({type: actionTypes.GET_BEERS_SUCCESS, payload: Mapper.mapToVM(response.data)});
        dispatch({type: actionTypes.TOGGLE_LOADING})
    }

};