import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, useSelector} from "react-redux"
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import HomeScreen from './Components/Screens/Home/HomeScreen.jsx'
import LoginScreen from "./Components/Screens/Login/LoginScreen.jsx"
import RegisterScreen from "./Components/Screens/Register/RegisterScreen.jsx"
import Dashboard from './Components/Screens/Dashboard/Dashboard.jsx'
import { store } from './Store/Store.jsx'
// const router = createBrowserRouter(
  

//   createRoutesFromElements(
//     <Route path='/' element={<App />}>

//       <Route path='/login' element={<LoginScreen />} />
//       <Route path='/register' element={<RegisterScreen />} />
//       <Route path="/home" element={<Dashboard/>} />
//       <Route index={true} path='/' element={<HomeScreen />} />
      
//     </Route>
    
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router= {router} /> */}
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
