import animesSection from '../Home/animesSection';

async function listAnimesFinded(search: string) {
  const animes = await animesSection(search, 0);
  
  return {
    info: "ANIMES ENCONTRADOS",
    idAnimes: animes.idAnimes,
    imagesAttributes: animes.imagesAttributes,
    title: animes.title
  };
}

export default listAnimesFinded;