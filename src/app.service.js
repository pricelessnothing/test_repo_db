import { push } from './github.service'
import { getNews, getProjects } from './wordpress.service'

export { buildNewsMap, buildProjectsMap }

async function buildNewsMap() {
  const newsData = await getNews()
  let file =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'
  newsData.forEach(({ link, lastmod }) => {
    file +=
      '  <url>\n' +
      `    <loc>${link}</loc>\n` +
      `    <lastmod>${lastmod}Z</lastmod>\n` +
      '  </url>\n'
  })

  file += '</urlset>\n'

  push('sitemap_news.xml', file)
}

async function buildProjectsMap() {
  const projectData = await getProjects()

  let file =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'

  projectData.forEach(({ link, lastmod, ru, en }) => {
    const ruAlternate = ru
      ? `    <xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>\n`
      : ''
    const enAlternate = en
      ? `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n`
      : ''
    file +=
      '  <url>\n' +
      `    <loc>${link}</loc>\n` +
      `    <lastmod>${lastmod}Z</lastmod>\n` +
      ruAlternate +
      enAlternate +
      '  </url>\n'
  })

  file += '</urlset>\n'

  push('sitemap_projects.xml', file)
}
