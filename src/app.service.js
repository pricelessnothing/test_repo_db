import { push } from './github.service'
import { getNews } from './wordpress.service'

export { buildNewsMap }

async function buildNewsMap() {
  const links = await getNews()
  let file =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'
  links.forEach(({ link, lastmod }) => {
    file +=
      '  <url>\n' +
      `    <loc>${link}</loc>\n` +
      `    <lastmod>${lastmod}Z</lastmod>\n` +
      '  </url>\n'
  })

  file += '</urlset>\n'

  push('sitemap_news.xml', file)
}
