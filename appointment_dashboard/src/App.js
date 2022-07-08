import Dashboard from './pages/Dashboard';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Appointment from './pages/Appointment';
function App() {
  return (

  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
