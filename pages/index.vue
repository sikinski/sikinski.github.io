<template>
  <div>
    <HeroSection />
    <IntroSection />
    <StatsSection />
    <ExperienceSection />
    <ProjectsSection />
  </div>
</template>

<script setup>
const { siteUrl } = useRuntimeConfig().public

const description = 'Разработка сайтов, лендингов, интернет-магазинов и веб-приложений на Vue 3 и Nuxt 4, а также AI-ассистентов и Telegram-ботов. '
  + 'Быстрая загрузка, SEO-оптимизация, адаптивная вёрстка и интеграции с нужными сервисами.'

useSiteSeo({
  title: 'Разработка сайтов и AI-ассистентов под ключ — sikinski.dev',
  description
})

const services = ['Разработка лендингов', 'Разработка корпоративных сайтов', 'Разработка интернет-магазинов', 'Разработка веб-приложений']

// Микроразметка: кто делает и какие услуги — поисковики показывают это в расширенной выдаче
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Ульяна',
          alternateName: 'sikinski',
          jobTitle: 'Frontend-разработчица',
          url: siteUrl,
          image: `${siteUrl}/images/portrait.jpg`,
          email: 'mailto:ulyana.sikinski@gmail.com',
          knowsAbout: ['Vue 3', 'Nuxt 4', 'JavaScript', 'Node.js', 'SEO', 'AI-ассистенты'],
          sameAs: [
            'https://t.me/sikinski',
            'https://github.com/sikinski',
            'https://kwork.ru/user/sikinski',
            'https://www.fl.ru/users/ulyanasikinski/portfolio/',
            'https://hh.ru/resume/183455daff0efd59760039ed1f613136313633'
          ]
        },
        {
          '@type': 'Service',
          '@id': `${siteUrl}/#service`,
          name: 'Разработка сайтов',
          serviceType: 'Разработка сайтов',
          description,
          url: siteUrl,
          provider: { '@id': `${siteUrl}/#person` },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Услуги',
            itemListElement: services.map(name => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name }
            }))
          }
        }
      ]
    })
  }]
})
</script>
