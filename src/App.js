import LoginComponent from './components/LoginComponent';
import DashBoard from './pages/Dashboard';
import { Route , Routes } from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
