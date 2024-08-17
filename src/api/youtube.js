import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API
const CHANNEL_ID = 'UCdMBvHugZtN_FZ6oh8L5BHA';

export const getSubscriberCount = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  return response.data.items[0].statistics.subscriberCount;
};
