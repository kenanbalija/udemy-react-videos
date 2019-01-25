import axios from 'axios';

const KEY = 'AIzaSyAJ6WwZTMUXMIDL_IRxVKaJft06NGyCT88'

export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },

});

