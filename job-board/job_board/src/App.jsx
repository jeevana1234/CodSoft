// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import MainPage from './pages/MainPage';
import JobInfoPage from './pages/JobInfoPage';

function App() {
  return (
    <Router> {/* Wrap your Routes inside BrowserRouter */}
      <Routes>
        <Route exact path="/" element={<MainPage />} /> {/* Use 'element' instead of 'componets' */}
        <Route path="/job-info" element={<JobInfoPage />} /> {/* Use 'element' instead of 'componets' */}
      </Routes>
    </Router>
  );
}

export default App;
