import Loadable from 'react-loadable';

import Home from './containers/home';
import Page from './containers/page';
import FourOFour from './containers/404';
import DownloadLoader from './components/download-loader';

const Portfolio = Loadable({
    loader: () => import(/* webpackChunkName: "portfolio" */ './containers/portfolio'),
    loading: DownloadLoader,
    modules: ['portfolio']
});

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './containers/projects'),
    loading: DownloadLoader,
    modules: ['projects']
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/portfolio',
        exact: true,
        component: Projects,
        /* routes: [
            {
                path: '/portfolio/:slug',
                component: Portfolio
            }
        ] */
    },
    {
        path: '/portfolio/:slug',
        exact: true,
        component: Portfolio
    },
    {
        path: '/p/:slug',
        component: Page
    },
    {
        path: '*',
        component: FourOFour
    }
];

export default routes;