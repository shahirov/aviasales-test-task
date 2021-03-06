# Тестовое задание Aviasales

Тестовое задание для Aviasales.<br />
**Подробное описание** [здесь](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend).<br />
С задеплоенным приложением можно ознакомиться, перейдя по [ссылке](https://my-aviasales-test-task.vercel.app/).

## Цели и результат

Написанное приложение работает как ожидается.

- Последовательный запрос чанков с билетами с удаленного сервера ✔
- Рендер билетов ✔
- Переключение валюты (получение котировок с [floatrates.com](http://floatrates.com)) ✔
- Фильтрация билетов ✔
- Сортировка билетов ✔

Вёрстка соответствует предложенному макету. Была добавлена респонсивность и прелоадер.

![example](/example.png)

## Доступные скрипты

#### `npm start`

Запускаем локально в дев режиме с помощью кастомной сборки Webpack.<br>
[http://localhost:3000](http://localhost:3000).

#### `npm run build`

Билдит приложение для продакшена в папку `build`.

.env не добавлен в .gitignore для вашего удобства.

## Пакеты, которые я использовал

В приложении используются следующие пакеты:

#### typescript

Был выбран потому что: статическая типизиция - это удобно, повышается читабельность кода, уменьшается количество багов и т.д.

#### webpack

Стандартизиованный во фронте билдер.

#### effector

Стейт менеджер. Выбрал его из - за удобного api, хорошей типизацией и маленького размера.

#### nanoid

Используется для генерации уникальных id.

#### styled-components

Нравится писать css-in-js стили. Поэтому и выбрал этот пакет.

#### eslint

Линтинг - обязательная вещь в любом проекте.

#### prettier

Код форматер.
