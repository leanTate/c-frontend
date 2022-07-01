import LoginComponent from './components/LoginComponent';
import DashBoard from './pages/Dashboard';
import { Route , Routes,useLocation } from 'react-router-dom'
import Product from './pages/Product';
import Navbar from './components/Navbar';
import History from './pages/History';
//CONTEXT
import GlobalState from './context/GlobalState';
function App() {
  let location = useLocation();
  return (
    <div className="App">
      <GlobalState>
      {(location.pathname) ==="/"? null : (<Navbar/>)}
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/history" element={<History />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </GlobalState>
    </div>
  );
}

export default App;
