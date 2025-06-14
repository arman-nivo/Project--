import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Component/Footer/Footer';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import Home from './Component/Home/Home';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import Buynow from './Component/BuyNow/Buynow';
import ExclusiveServices from './Component/ExclusiveServices/ExclusiveServices';
import ItSolution from './Component/ItSolution/ItSolution';
import ClientFeedback from './Component/ClientFeedback/ClientFeedback';
import SciFiBanner from './Component/SciFiBanner/SciFiBanner';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/services' element={<ExclusiveServices />}></Route>
        <Route path='/service-info' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/cart" element={<Buynow />} />
        <Route path='/profile' element={<Profile />}> </Route>

        <Route path='/blog' element= {<ItSolution></ItSolution>}> </Route>

        <Route path='/about' element= {<SciFiBanner />}> </Route>
        <Route path='/Feedback' element= {<ClientFeedback />}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
