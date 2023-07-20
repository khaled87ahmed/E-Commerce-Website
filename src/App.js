import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider, } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Protected from './Components/Protected/Protected';
import Pagenotfound from './Components/Pagenotfound/Pagenotfound';
import ResetCode from './Components/ResetCode/ResetCode';
import ResetPasswordFromOut from './Components/ResetPasswordFromOut/ResetPasswordFromOut';
import ProtectedResetCode from './Components/ProtectedResetCode/ProtectedResetCode';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import CategoriesDetails from './Components/CategoriesDetails/CategoriesDetails';
import BrandsDetails from './Components/BrandsDetails/BrandsDetails';
import Products from './Components/Products/Products';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store';
import Cart from './Components/Cart/Cart';
import ToPayment from './Components/ToPayment/ToPayment';
import AllOrders from './Components/AllOrders/AllOrders';


let routes = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Protected><Home /></Protected> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'resetcode', element: <ResetCode /> },
      { path: 'resetpasswordfromout', element: <ProtectedResetCode><ResetPasswordFromOut /></ProtectedResetCode> },
      { path: 'productdetails', element: <Protected><ProductDetails /></Protected> },
      { path: 'brands', element: <Protected><Brands /></Protected> },
      { path: 'brandsdetails', element: <Protected><BrandsDetails /></Protected> },
      { path: 'categories', element: <Protected><Categories /></Protected> },
      { path: 'categoriesdetails', element: <Protected><CategoriesDetails /></Protected> },
      { path: 'products', element: <Protected><Products /></Protected> },
      { path: 'cart', element: <Protected><Cart /></Protected> },
      { path: 'topayment', element: <Protected><ToPayment /></Protected> },
      { path: 'allorders', element: <Protected><AllOrders /></Protected>},
      { path: '*', element: <Pagenotfound /> }

    ]
  }
])

export default function App() {




  return (<Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
  </Provider>


  )
}
