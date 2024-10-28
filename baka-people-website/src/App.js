import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import History from './components/History';
import Culture from './components/Culture';
import Languages from './components/Languages';
import Food from './components/Food';
import Religion from './components/Religion';
import './index.css';  // Or './styles.css'
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>The Baka People of Cameroon</h1>
          <nav>
            <ul>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/languages">Languages</Link></li>
              <li><Link to="/food">Food</Link></li>
              <li><Link to="/religion">Religion</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/food" element={<Food />} />
            <Route path="/religion" element={<Religion />} />
            <Route path="/" element={<History />} /> {/* Default Route */}
          </Routes>
        </main>

        <footer>
          <p>© 2024 Dedicated to the Baka People of Cameroon</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

