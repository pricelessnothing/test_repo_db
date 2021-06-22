import fetch from 'node-fetch'

export { getNews, getProjects }

async function getNews() {
  const links = []
  let dataLength = 0
  let page = 1

  do {
    const data = await fetch(
      `https://dev.spbpu.com/wp-json/wp/v2/news?per_page=100&page=${page}`,
    ).then((res) => res.json())

    const isSucceeded = data instanceof Array

    if (isSucceeded) {
      dataLength = data.length
      page++

      links.push(
        ...data.map((news) => ({
          link: news.link,
          lastmod: news.modified_gmt,
        })),
      )
    } else {
      dataLength = 0
    }
  } while (dataLength)

  return links
}

async function getProjects() {
  const data = await fetch(
    'http://dev.spbpu.com/wp-json/spbpu/v1/project-map',
  ).then((res) => res.json())
  const isSucceeded = data instanceof Array

  return isSucceeded ? data : []
}
