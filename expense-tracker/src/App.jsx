import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';
import NewPlanPage from './pages/NewPlanPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path='/newPlan' element={<NewPlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
