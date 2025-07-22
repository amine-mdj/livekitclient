// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinForm from './JoinForm';
import RoomPage from './RoomPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<JoinForm />} />
          <Route path="/room/:roomName" element={<RoomPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
