import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from './actions';
import * as selectors from './selectors';

export default (HomepageGUI) => {

    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()

    const getBeers = (params) => dispatch(actions.getBeers(params));

    return (
        <HomepageGUI
            getBeers={getBeers}
            beers={beers}
        />
    )

}

