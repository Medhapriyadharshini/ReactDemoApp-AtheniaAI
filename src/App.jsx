
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      {/* <Home />
      <About/> */}
      <Footer />
    </div>
  );
}

export default App;
