import React, { useState, useEffect } from 'react';
import { getChannelDetails } from './api/youtube';

const LiveSubCount = () => {
  const [channelDetails, setChannelDetails] = useState({
    subscriberCount: null,
    channelName: '',
    profilePicture: ''
  });

  const fetchChannelDetails = async () => {
    const details = await getChannelDetails();
    setChannelDetails(details);
  };

  useEffect(() => {
    fetchChannelDetails();
    const intervalId = setInterval(fetchChannelDetails, 3000); // Fetch every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        <img 
          src={channelDetails.profilePicture} 
          alt="Channel Thumbnail" 
          className="w-24 h-24 rounded-full" 
        />
        <h1 className="text-4xl font-semibold">{channelDetails.channelName}</h1>
        <div className="text-7xl font-bold">
          {channelDetails.subscriberCount !== null ? 
            parseInt(channelDetails.subscriberCount).toLocaleString() : 
            'Loading...'
          }
        </div>
        <p className="text-xl">Subscribers</p>
      </div>
    </div>
  );
};

export default LiveSubCount;
