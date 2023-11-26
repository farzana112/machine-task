import React from 'react'
import {Outlet} from 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Container } from 'react-bootstrap';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header/Header.jsx'
import HomeScreen from './Components/Screens/Home/HomeScreen.jsx'
import {Provider, useSelector} from 'react-redux'
import{ store } from "./Store/Store.jsx"
import RegisterScreen from './Components/Screens/Register/RegisterScreen.jsx';
import LoginScreen from './Components/Screens/Login/LoginScreen.jsx';
import Dashboard from './Components/Screens/Dashboard/Dashboard.jsx';
// const App = () => {
//   return (
//     <>
//     <Provider store={store} >
//     <Header/>
//     <Container className='my-2'>
//     {/* <Outlet/> */}
//     <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Dashboard />} />
//           <Route path="/register" element={<RegisterScreen />} />
//           <Route path="/login" element={<LoginScreen />} />
//           <Route index={true} path='/' element={<HomeScreen />} />
          
//         </Routes>
//       </BrowserRouter>
//     </Container>
//     </Provider>
//     <ToastContainer/>
//     </>
//   )
// }

const Layout = () => {

  return (
    <div>
      <Header />
      <Container className="my-2">
        <Outlet /> {/* This will render child routes */}
      </Container>
    </div>
  );
};

const App = () => {
  const token=useSelector((state)=>state.user?.user?.token)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={token?<Dashboard />:<Navigate to="/login"/>} />
            <Route path="/register" element={token?<Navigate to="/home"/>:<RegisterScreen />} />
            <Route path="/login" element={token?<Navigate to="/home"/>:<LoginScreen />} />
            <Route index={true} path="/" element={<HomeScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      </>
  );
};


export default App
