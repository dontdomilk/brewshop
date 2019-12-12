import * as actionTypes from './action-types'

const initialState = {
    beers: [],
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADING:
            const {loading} = state;

            return {
                ...state,
                loading: !loading
            }
        case actionTypes.GET_BEERS_SUCCESS:

            const { payload: {beers} } = action;

            return {
                ...state,
                beers
            };

        default:
            return state;
    }
}