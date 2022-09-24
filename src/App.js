import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/layouts/Navbar';
import Footer from './Components/layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import News from './Components/pages/News';
import Contacts from './Components/pages/Contacts';
import Details from './Components/pages/Details';
import NotFoundPage from './Components/pages/NotFoundPage';

export class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
    )
  }
}

export default App