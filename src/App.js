import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import LeagueList from './components/Character';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leagues" element={<LeagueList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
