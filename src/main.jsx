import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Context } from './components/Context/Context.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products/Products.jsx';
import ProductsDetails from './pages/ProductsDetails/ProductsDetails.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PageError from './pages/PageError/PageError.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <PageError/>,
    children:[
      {path:'/', element: <Products/>},
      {path:'products/:id', element: <ProductsDetails/>},
      {path:'/cart', element: <Cart/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Context>
        <RouterProvider router={router}/>
      </Context>
  </React.StrictMode>,
)