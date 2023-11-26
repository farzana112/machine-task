import React from 'react'
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header/Header.jsx'
import HomeScreen from './Components/Screens/Home/HomeScreen.jsx'
import {Provider} from 'react-redux'
import{ store } from "./Store/Store.jsx"
const App = () => {
  return (
    <>
    <Provider store={store} >
    <Header/>
    <Container className='my-2'>
    <Outlet/>
    </Container>
    </Provider>
    <ToastContainer/>
    </>
  )
}

export default App
