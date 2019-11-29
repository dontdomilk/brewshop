import Home from '../home';
import Favorites from '../favorites';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/favorite_beers',
        component: Favorites
    }
]