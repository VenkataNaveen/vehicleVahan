import './App.css';
import Login from './container/login/login';
import { Provider } from 'react-redux';
import store from './reducer/store';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Auth from './routes/auth';
import Layout from './container/layout/layout';
import Dashboard from './container/dashboard/dashboard';
import Home from './container/home/home';
import VehicleReport from './container/vehicleReport/vehiclereport';
import Mapreport from './container/mapreport/mapreport';

const ProviderConfig = () =>{

  return (
    
    <div className='App'>
      <Router basename="admin" forceRefresh={true}>
        {
      <Routes>
           <Route path="layout" element={<Layout />} >
            <Route path='home' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='vehiclereport' element={<VehicleReport />} />
            <Route path='mapreport' element={<Mapreport />} />
           </Route>
        </Routes>}
      
      </Router>
    </div>
  );
}

function App() {
  return (
  <Provider store={store}>
    <ProviderConfig />
</Provider>
  )
}

export default App;

