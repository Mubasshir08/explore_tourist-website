import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import PlacePage from './pages/PlacePage/PlacePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/place/:city" element={<PlacePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
