import React from 'react';
import {Switch, Route} from 'react-router';
import Home from '../home';
import Routes from './routes';
import {withRouter} from 'react-router-dom';

const AppRouter = (props) => {

    return (
        <Switch>
            {
                Routes.map(
                    ({path, component, exact=false}, i) => (
                        <Route
                            path={path}
                            component={component}
                            exact={exact}
                            key={`app-route-${i}`}
                        />
                    )
                )
            }
            <Route path="/beers" component={() => <div>Beer Page!</div>}/>
            {/*<Route component={Home}/>*/}
        </Switch>
    )
}

export default withRouter(AppRouter);