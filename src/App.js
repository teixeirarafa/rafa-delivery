import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';
import ProductsDashboard from './Pages/ProductsDashboard';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductsDashboard} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
