import { AppRouter } from './router/AppRouter';
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
//CONTEXT
import { AuthProvider } from "./auth/context/AuthContex";
function App() {
  let location = useLocation();
  return (
    <div className="App">
      <AuthProvider>
      {(location.pathname) ==="/"? null : (<Navbar/>)}
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
