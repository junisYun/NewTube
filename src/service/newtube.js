import axios from 'axios';

class NewTube {
  constructor(key) {
    this.client = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: { key },
    });
  }
  async mostPopular() {
    const response = await this.client.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        regionCode: 'kr',
      },
    });
    return response.data.items;
  }
  async search(query) {
    const response = await this.client.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'video',
      },
    });
    console.log('여기테스트', response);
    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
  async comment(videoId) {
    const response = await this.client.get('commentThreads', {
      params: {
        part: 'snippet',
        maxResults: 100,
        videoId: videoId,
        order: 'relevance',
      },
    });
    return response.data.items;
  }
}

export default NewTube;
