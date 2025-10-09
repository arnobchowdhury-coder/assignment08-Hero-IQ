import React from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loading from './Components/Loading/Loading.jsx';

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <NavBar></NavBar>
      {navigation.state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default Root;
