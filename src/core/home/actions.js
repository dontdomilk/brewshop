import restService from '../../services/rest_service';
import * as actionTypes from './action-types';
import Mapper from './mapper';


export const getBeers = (filters) => async (dispatch) => {

    const response = await restService.get('/beers');

    if (response) {

        dispatch({type: actionTypes.GET_BEERS_SUCCESS, payload: Mapper.mapToVM(response.data)});
    }

};