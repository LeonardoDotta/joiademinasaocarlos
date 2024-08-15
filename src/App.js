import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Purchases from './Pages/Purchases';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route element={<Home/>} exact path="/">
        </Route>
        <Route element={<Purchases/>} exact path='/purchases'>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
