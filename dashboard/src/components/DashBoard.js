import React from 'react'
import WatchList from './WatchList';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Summary from './Summary';
import { Routes , Route } from 'react-router-dom';


function DashBoard() {
    return ( 
        <div className="dashboard-container">
      
        <WatchList />
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />        </Routes>
      </div>
    </div>
     );
}

export default DashBoard;