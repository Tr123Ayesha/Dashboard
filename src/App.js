import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => (
  <div>
    <Sidebar showSidebar={true} style={{ overflowX: "hidden" }}>
      <Outlet /> {/* Nested routes will render here */}
    </Sidebar>
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
       </Routes>
       </Router>
   </div>
  );
}

export default App;
