# Nuxt 2 SSR Demo

Учебный проект для разбора Server-Side Rendering.

## Установка
npm install

## Запуск
npm run dev

## Как работает SSR
1. Запрос приходит к Nuxt (Node.js)
2. asyncData выполняется на сервере
3. HTML отдается уже с данными
4. Vue гидратирует страницу в браузере

## Требуется backend
GET http://localhost:3500/api/message
