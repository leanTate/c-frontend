import LoginComponent from './components/LoginComponent';
import DashBoard from './pages/Dashboard';
import { Route , Routes,useLocation } from 'react-router-dom'
import Product from './pages/Product';
import Navbar from './components/Navbar';
import History from './pages/History';
function App() {
  let location = useLocation();
  return (
    <div className="App">
      {(location.pathname) ==="/"? null : (<Navbar/>)}
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/history" element={<History />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
