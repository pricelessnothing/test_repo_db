import { push } from './github.service'
import { getNews } from './wordpress.service'

export { buildNewsMap }

async function buildNewsMap() {
  const links = await getNews()
  let file =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'
  links.forEach((link) => {
    file += `<url>\n\t<loc>${link}</loc>\n</url>\n`
  })

  push('sitemap.xml', file)
}
