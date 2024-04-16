import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/product/:id',
          element: <ProductPage />,
        },
      ],
    },
  ],
  {
    basename: '/xxxmuck',
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
