import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FIN from './pages/FIN';
import MMS from './pages/MMS';
import Ecom from './pages/Ecom';
import Saaddev from './pages/Saaddev';
import Service from './components/Saaddev/Service';
import Project from './components/Saaddev/Project'
import Products from './components/Ecom/Products';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route Component={Saaddev} path='/' />
            <Route Component={FIN} path='/fin'/>
            <Route Component={MMS} path='/mms' />
            <Route Component={Ecom} path='/ecom'/>
            <Route Component={Service} path='/saaddev/service'/>
            <Route Component={Project} path='/saaddev/project'/>
            <Route Component={Products} path='/ecom/product'/>

        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
