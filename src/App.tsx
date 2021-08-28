import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import About from './components/About';
import Dateselect from './components/Dateselect';
import Records from './components/Records';

function App() {
  return (
    <Router>
      <Navbar />

      {/* template for /history/result
      <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Historical price</p>
        <p className='text-2xl'>Loading ...</p>
        <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
        <ul>
          <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
        </ul>
      </div> */}


      <Switch>
        <Route path='/' exact>
          <Current />
        </Route>
        <Route path='/current'>
          <Current />
        </Route>
        <Route path='/history/select'>
          <Dateselect />
        </Route>
        <Route path='/history/' >
          <Records/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
