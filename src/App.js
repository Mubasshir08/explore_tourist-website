import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import PlacePage from './pages/PlacePage/PlacePage';
import Resident from './pages/Resident/Resident';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/place/:city" element={<PlacePage />} />
            <Route path="/place/:city/hotel/:hotel" element={<Resident />} />
            <Route path="/place/:city/hotel/:hotel/booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
