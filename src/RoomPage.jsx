import {
  LiveKitRoom,
  VideoConference,
} from '@livekit/components-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';

function RoomPage() {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('livekit_token');
    if (!storedToken) {
      navigate('/');
    } else {
      setToken(storedToken);
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="centered-container">
        <h2 style={{ color: 'white' }}>Connecting to room...</h2>
      </div>
    );
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl="https://kivekitbinary3-production.up.railway.app" // replace with your actual server if needed
      connect
      data-lk-theme="default"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#121212',
      }}
    >
      <VideoConference />
    </LiveKitRoom>
  );
}

export default RoomPage;
