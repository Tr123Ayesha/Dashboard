import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import React from 'react';
import PersistentDrawerLeft from './components/side';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => (
  <div>
    <PersistentDrawerLeft showSidebar={true} style={{ overflowX: "hidden" }}>
      <Outlet /> {/* Nested routes will render here */}
    </PersistentDrawerLeft>
  </div>
);
function App() {
  return (
   <div>
<Router>
    <Routes>
       <Route path="/" element={<DashboardLayout />}>
        {/* <Route path="Users" element={<PropertyAuthStep1 />} />   */}
        {/* <Route path="kyc-approval" element={<KycApprovals />} /> */}
        </Route>
        <Route path='/dashboard' element={<PersistentDrawerLeft/>} />
       </Routes>
       </Router>
   </div>
  );
}

export default App;
