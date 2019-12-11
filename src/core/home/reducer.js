import * as actionTypes from './action-types'

const initialState = {
    beers: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_BEERS_SUCCESS:

            const { payload: {beers} } = action;
            console.log(beers, state)
            return {
                ...state,
                beers
            };

        default:
            return state;
    }
}