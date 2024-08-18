import React, { useState, useEffect } from 'react';
import { getChannelDetails } from './api/youtube';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

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
          className="w-24 h-24 rounded-full border-4 border-white" 
        />
        <h1 className="text-4xl font-semibold">{channelDetails.channelName}</h1>
        <div className="text-7xl font-bold">
          {channelDetails.subscriberCount !== null ? 
            parseInt(channelDetails.subscriberCount).toLocaleString() : 
            'Loading...'
          }
        </div>
        <p className="text-xl">Subscribers</p>
        
        <a 
          href="https://www.youtube.com/@kwargdevs?sub_confirmation=1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Subscribe
          <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default LiveSubCount;
