

# Live YouTube Subscriber Count

This is a React web app that displays a live YouTube subscriber count. It fetches data from the YouTube Data API using the channel's username.


## Features

- **Live Subscriber Count**: The app fetches and updates the subscriber count every 5 seconds.
- **YouTube API Integration**: Uses the YouTube Data API v3 to retrieve channel statistics.
- **Environment Variables**: API key management through a `.env` file for security.

## Demo

![Live sub count](https://github.com/user-attachments/assets/13d81de9-0a27-408b-87aa-236357573673)




## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **YouTube API Key**: You need a YouTube Data API key. [Get it here](https://console.cloud.google.com/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VinCoD/youtube-live-sub-count
   cd youtube-live-sub-count
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root of the project:**

   ```bash
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open the app in your browser:**

   The app should automatically open in your browser at `http://localhost:3000`. If it doesn't, you can manually navigate to this URL.

### Usage

1. **Update the Username:**

   In `src/api/youtube.js`, replace `'YOUR_CHANNEL_USERNAME'` with the YouTube username of the channel you want to track.

   ```javascript
   const USERNAME = 'YOUR_CHANNEL_USERNAME';
   ```

2. **Customize Fetch Interval:**

   The app fetches the subscriber count every 5 seconds. You can adjust this interval in the `LiveSubCount` component:

   ```javascript
   const intervalId = setInterval(fetchSubCount, 5000); // Fetch every 5 seconds
   ```

### Deployment

To deploy the app, you can build it for production and host it on a service like GitHub Pages, Netlify, or Vercel.

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Deploy the `build` directory** to your preferred hosting service.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [React](https://reactjs.org/)

### Contact

- **Vincent Otieno**: [vincentotieno161@gmail.com](mailto:vincentotieno161@gmail.com)
- **GitHub**: [VinCoD](https://github.com/vincod)
- **YouTube**: [KwargDevs](https://youtube.com/@kwargdevs)

