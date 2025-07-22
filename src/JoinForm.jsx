// JoinForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function JoinForm() {
  const [name, setName] = useState('');
  const [micEnabled, setMicEnabled] = useState(true);
  const [camEnabled, setCamEnabled] = useState(true);
  const navigate = useNavigate();

  const handleJoin = async (e) => {
    e.preventDefault();
    const roomName = 'my-room';
    const response = await fetch('https://livekittoken-lh8k.onrender.com/api/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ roomName: roomName, identity: name }),
});
    const tokenResponse = await response.json();
console.log('🧪 Token response from backend:', tokenResponse);

const token = tokenResponse.token;

    localStorage.setItem('livekit_token', token);
    localStorage.setItem('livekit_user', name);

    navigate(`/room/${roomName}`);
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleJoin} className="join-form">
        <h2>Join a Room</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={micEnabled}
            onChange={() => setMicEnabled(!micEnabled)}
          /> Enable Microphone
        </label>
        <label>
          <input
            type="checkbox"
            checked={camEnabled}
            onChange={() => setCamEnabled(!camEnabled)}
          /> Enable Camera
        </label>
        <button type="submit">Join Room</button>
      </form>
    </div>
  );
}

export default JoinForm;