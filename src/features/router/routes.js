import Home from '../home';
import Favorites from '../favorites';

export default [
    {
        path: '/',
        exact: true,
        displayName: 'Home',
        component: Home
    },
    {
        path: '/favorite_beers',
        displayName: 'Favorite Beers',
        component: Favorites
    },

]