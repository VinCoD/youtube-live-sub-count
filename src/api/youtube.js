import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
const CHANNEL_ID = 'UCdMBvHugZtN_FZ6oh8L5BHA';

export const getChannelDetails = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  
  const data = response.data.items[0];
  
  return {
    subscriberCount: data.statistics.subscriberCount,
    channelName: data.snippet.title,
    profilePicture: data.snippet.thumbnails.default.url
  };
};
