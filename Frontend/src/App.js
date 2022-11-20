import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Recap from './Pages/Recap';
import AdminPresent from './Pages/AdminPresent.jsx';
import ClientPresent from './Pages/ClientPresent.jsx';
import Present from './Pages/Present.jsx';
import Viewing from './Pages/Viewing';

function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Recap' element={<Recap />}></Route>
      <Route path='/AdminPresent' element={<AdminPresent />}></Route>
      <Route path='/ClientPresent' element={<ClientPresent />}></Route>
      <Route path='/Present' element={<Present />}></Route>
      <Route path='/Viewing' element={<Viewing />}></Route>
  </Routes>
</BrowserRouter>


  );
}

export default App;
