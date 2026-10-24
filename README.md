# sikinski.dev

Личный сайт-портфолио: разработка сайтов на Vue 3 и Nuxt 4, кейсы и AI-ассистенты.

## Запуск

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # продакшн-сборка в .output
pnpm preview
```

Адрес сайта для canonical, Open Graph и sitemap задаётся в `nuxt.config.js` (`runtimeConfig.public.siteUrl`)
или переменной окружения `NUXT_PUBLIC_SITE_URL`.

## Где что лежит

| Что | Где |
|---|---|
| Страницы | `pages/` — главная, `/cases`, `/cases/[slug]`, `/about`, `/contacts` |
| Секции и компоненты | `components/` |
| Проекты портфолио (тексты, факты, скриншоты) | `shared/projects.js` |
| Цвета, сброс, общие классы, брейкпоинты | `assets/*.sass` |
| Картинки проектов | `public/images/projects/<slug>.webp` — обложка, `<slug>/01.webp…` — скриншоты |
| sitemap.xml и robots.txt | `server/routes/` |

Чтобы скрыть проект, поставьте ему `draft: true` в `shared/projects.js`.

## Деплой

GitHub Pages через GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):
каждый push в `main` собирает статику (`pnpm generate`) и публикует `.output/public`.
Свой домен задан в `public/CNAME` — `sikinski.dev`.
