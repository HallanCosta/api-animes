import cheerio from 'cheerio';

async function paginationAnimes(body: string) {
  const $ = cheerio.load(body);

  const paginationNumbers: string[] = [];

  $('.pagination').find('a').each(function(i: number, element) {
    paginationNumbers[i] = $(element)[0].attribs.href.split('/')[4];
  });

  return paginationNumbers;
}

export default paginationAnimes;