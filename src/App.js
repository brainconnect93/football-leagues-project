import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import HomePage from './components/Home';
import LeagueData from './components/LeagueData';

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/leagues" element={<LeagueData />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
