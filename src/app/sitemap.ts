

export const baseUrl = 'https://eroglu.dev'

export default async function sitemap() {


  let routes = ['', '/currently','/projects','/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
