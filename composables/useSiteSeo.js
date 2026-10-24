// Общие SEO-теги страницы: title, description, canonical, Open Graph и превью для соцсетей
export function useSiteSeo({ title, description, path = '/', type = 'website' }) {
  const { siteUrl } = useRuntimeConfig().public
  const url = siteUrl + path
  const image = siteUrl + '/og-image.png'

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: url,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogSiteName: 'sikinski.dev',
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image'
  })

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })
}
