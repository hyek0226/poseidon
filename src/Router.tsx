import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '@/src/pages/Home';
import MyPage from '@/src/pages/MyPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
