import listAnimesFinded from '../../src/utils/ListAnimesFinded';

describe('listAnimesFinded', () => {
  it('should be able to list animes finded', async () => {
    const animes = await listAnimesFinded('?s=Mahou shoujo site');

    console.log(animes);

    expect(animes).toHaveProperty('info');
    expect(animes).toHaveProperty('idAnimes');
    expect(animes).toHaveProperty('imagesAttributes');
    expect(animes).toHaveProperty('title');
  });
})