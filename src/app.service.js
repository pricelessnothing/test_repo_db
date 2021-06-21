import { push } from './github.service'

export { buildProjectMaps }

function buildProjectMaps() {
  const data = 'yo wassup im data'

  push('sitemap.txt', data)
}
