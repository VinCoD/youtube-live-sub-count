import React, { useState, useEffect } from 'react';
import { getSubscriberCount } from './api/youtube';

const LiveSubCount = () => {
  const [subCount, setSubCount] = useState(null);

  const fetchSubCount = async () => {
    const count = await getSubscriberCount();
    setSubCount(count);
  };

  useEffect(() => {
    fetchSubCount();
    const intervalId = setInterval(fetchSubCount, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div>
      <h1>Live Subscriber Count</h1>
      {subCount !== null ? <h2>{subCount}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default LiveSubCount;
