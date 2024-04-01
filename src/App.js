import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import Signup from './components/onboarding/Signup';
import Instructions from './components/onboarding/Instructions';
import Layout from './components/layout/layout'; // Import the Layout component
import DashboardHome from './pages/dashboard/DashboardHome'; // Import the DashboardHome component
import RepairRequests from './pages/dashboard/RepairRequests'
import WorkOrders from './pages/dashboard/WorkOrders'
import Properties from './pages/dashboard/Properties';
import Step1 from './components/onboarding/Step1';
import Step2 from './components/onboarding/Step2';
import RequestDetails from './pages/dashboard/RequestDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} > {/* No layout here */}
          <Route path="/" element={<Signup />} /> {/* No layout here */}
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/step_one" element={<Step1 />} />
          <Route path="/step_two" element={<Step2 />} />
        </Route>
        <Route path="/dashboard/home" element={<Layout><DashboardHome /></Layout>}>
        </Route>
        <Route path="/dashboard/requests" element={<Layout><RepairRequests /></Layout>}>
        </Route>
        <Route path="/dashboard/orders" element={<Layout><WorkOrders /></Layout>}>
        </Route>
        <Route path="/dashboard/properties" element={<Layout><Properties /></Layout>}>
        </Route>
        <Route path="/dashboard/request-details" element={<Layout><RequestDetails /></Layout>}>
        </Route>



      </Routes>
    </Router >
  );
}

export default App;