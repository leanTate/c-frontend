import LoginComponent from './components/LoginComponent';
import DashBoard from './pages/Dashboard';
import { Route , Routes } from 'react-router-dom'
import Product from './pages/Product';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
