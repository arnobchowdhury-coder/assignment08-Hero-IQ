
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Outlet, useNavigation } from 'react-router';

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <NavBar></NavBar>
      {navigation.state === "loading" ? <Loading /> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  )
}

export default Root;
