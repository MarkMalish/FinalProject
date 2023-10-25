import React, { Component } from 'react'; // Import React and Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import './App.css';
import Index from './components/Index'; // Import Index component
import Login from './components/Login'; // Import Login component
import Home from './components/Home'; // Import Home component
import Registration from './components/Registration'; // Import Registration component

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<div><Home /></div> } />
            <Route exact path="/registration" element={<Registration />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
