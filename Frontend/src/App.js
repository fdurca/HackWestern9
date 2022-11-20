import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Recap from './Pages/Recap';
import AdminPresent from './Pages/AdminPresent.jsx';
import ClientPresent from './Pages/ClientPresent.jsx';
import Present from './Pages/Present.jsx';
import Viewing from './Pages/Viewing';
import Meeting1 from './Pages/Meerting1';
import ClientMeeting1 from './Pages/ClientMeeting1';
import AdminMeeting1 from './Pages/AdminMeeting1';
 import { num } from './Pages/AdminPresent.jsx';


function App() {

  return (
    
 <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Recap' element={<Recap />}></Route>
      <Route path={'/AdminPresent'} element={<AdminPresent />}></Route>
      <Route path='/ClientPresent' element={<ClientPresent />}></Route>
      <Route path= {'/Present'} element={<Present />}></Route>
      <Route path='/Viewing' element={<Viewing />}></Route>
      <Route path='/Meeting1' element={<Meeting1 />}></Route>
      <Route path='/ClientMeeting1' element={<ClientMeeting1 />}></Route>
      <Route path='/AdminMeeting1' element={<AdminMeeting1 />}></Route>
  </Routes>
</BrowserRouter>


  );
}

export default App;
