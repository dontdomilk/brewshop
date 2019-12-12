import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from './actions';
import * as selectors from './selectors';

export default (HomepageGUI) => {

    const mapDispatchToProps = (dispatch) => ({
        getBeers: (params) => dispatch(actions.getBeers(params))
    })



    const mapStateToProps = (state) => ({
        beers: selectors.selectBeers(state)
    })



    const HomepageWrapper = (props) => (
        <HomepageGUI
            getBeers={props.getBeers}
            beers={props.beers}
        />
    )

    return connect(mapStateToProps, mapDispatchToProps)(HomepageWrapper);
}


