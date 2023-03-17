import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Blue Bank Routing
const Overview = Loadable(lazy(() => import('views/overview')));
const Account = Loadable(lazy(() => import('views/account')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Overview />
        },

        {
            path: 'overview',
            element: <Overview />
        },
        {
            path: 'account',
            element: <Account />
        }
    ]
};

export default MainRoutes;
