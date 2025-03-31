import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login';
import { SignUp } from './components/common/SignUp';

import axios from 'axios';

import { Home } from './components/common/Home';
import { ProductPage } from './components/product/ProductPage';


import { AboutUs } from './components/common/AboutUs';
import { Payment } from './components/common/Payment';
import { ShippingPage } from './components/common/ShippingPage';
import { UserDashboard } from './components/layouts/UserDashboard';
import { AdminProfile } from './components/admin/AdminProfile';
import { ContactPage } from './components/common/ContactPage';
import { ThankyouPage } from './components/common/ThankyouPage';
import { AddToCart } from './components/common/AddToCart ';
import { ForgotPass } from './components/common/ForgotPass';
import { ResetPass } from './components/common/ResetPass';
import { AddProduct } from './components/admin/Addproduct';







// import './App.css'

function App() {
  axios.defaults.baseURL = "http://localhost:3000"
  
  
  return (



<Routes>

            <Route path='/' element={<Home/>}></Route>

            <Route path='/userdashboard' element={<UserDashboard/>}></Route>
            <Route path='/userprofile' element={<UserProfile/>}></Route>


            <Route path='/adminprofile' element={<AdminProfile/>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
            



            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/contactpage' element={<ContactPage/>}></Route>
            <Route path='/thankyoupage' element={<ThankyouPage/>}></Route>
            <Route path='/addtocart' element={<AddToCart/>}></Route>
            <Route path='/forgotpass' element={<ForgotPass/>}></Route>
            <Route path='/resetpass/:token' element={<ResetPass/>}></Route>


            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path='/payment' element={<Payment/>}></Route>
            <Route path='/shipping' element={<ShippingPage/>}></Route>

          
            <Route path='/product' element={<ProductPage/>}></Route>
      

            
            



          </Routes>
          




  )
}

export default App
