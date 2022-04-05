import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import AboutBook from './components/Aboutbook/AboutBook';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='*' element={
          <div>
            <h2>page not found</h2>
            <h1>404</h1>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
