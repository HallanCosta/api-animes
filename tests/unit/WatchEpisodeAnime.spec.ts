import episodeLastEntries from '../../src/utils/WatchEpisodeAnime/';

describe('should to watch episode anime', () => {
  it('should to list the video from the last entry', async () => {
    const episode = await episodeLastEntries('55722');
    // console.log(episode);

    expect(episode).toHaveProperty('sd');
    expect(episode).toHaveProperty('hd');
  });  
})