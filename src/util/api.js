import axios from 'axios';

require('dotenv').config();

const apiUrl = `
https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape&query=Wallpaper+mountains`;

const downloadLocation = (photoUrl) => `${photoUrl}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;

const getRandomImage = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then(({ data }) => {
      resolve({ urls: data.urls, user: data.user });
      axios.get(downloadLocation(data.links.download_location));
    })
    .catch((error) => reject(error));
});

export { getRandomImage as default };
