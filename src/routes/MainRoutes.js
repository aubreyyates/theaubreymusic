import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/home')));
const Contact = Loadable(lazy(() => import('pages/contact')));
const Music = Loadable(lazy(() => import('pages/music')));
const Dates = Loadable(lazy(() => import('pages/dates')));
const About = Loadable(lazy(() => import('pages/about')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'home',
      element: <DashboardDefault />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'music',
      element: <Music />
    },
    {
      path: 'dates',
      element: <Dates />
    },
    {
      path: 'about',
      element: <About />
    }
  ]
};

export default MainRoutes;
