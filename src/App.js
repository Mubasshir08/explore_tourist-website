import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import PlacePage from './pages/PlacePage/PlacePage';
import Resident from './pages/Resident/Resident';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/place/:city" element={<PlacePage />} />
            <Route path="/place/:city/hotel/:hotel" element={<Resident />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
