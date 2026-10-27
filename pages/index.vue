<template>
  <div>
    <HeroSection />
    <IntroSection />
    <ExperienceSection />
    <ServicesSection />
    <ProjectsSection />
    <StatsSection />
  </div>
</template>

<script setup>
import { serviceGroups } from '#shared/services'

const { siteUrl } = useRuntimeConfig().public

const description = 'Разработка под ключ: интернет-магазины с оплатой и доставкой, PWA-приложения, Telegram-боты и AI-ассистенты. '
  + 'FullStack-разработчица и AI-инженер с опытом 5+ лет.'

useSiteSeo({
  title: 'Разработка сайтов, Telegram-ботов и AI-ассистентов под ключ — sikinski.dev',
  description
})

const services = serviceGroups.flatMap(group => group.items)

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
          jobTitle: 'FullStack-разработчица, AI-инженер',
          url: siteUrl,
          image: `${siteUrl}/images/portrait-2.jpg`,
          email: 'mailto:ulyana.sikinski@gmail.com',
          knowsAbout: ['AI-ассистенты', 'LLM', 'Telegram-боты', 'PWA', 'Node.js', 'Vue 3', 'Nuxt 4', 'PostgreSQL', 'Docker'],
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
          name: 'Разработка сайтов, ботов и AI-ассистентов',
          serviceType: 'Разработка программного обеспечения',
          description,
          url: siteUrl,
          provider: { '@id': `${siteUrl}/#person` },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Услуги',
            itemListElement: services.map(item => ({
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'RUB',
              itemOffered: { '@type': 'Service', name: item.name, description: item.text }
            }))
          }
        }
      ]
    })
  }]
})
</script>
