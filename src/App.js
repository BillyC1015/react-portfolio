import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header></Header> 
      <Routes>
      <Route path='/'></Route>



      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
