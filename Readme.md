Project name:Orders-n-Products

Description:Orders-n-Products is a website that allows users to view orders and products.

Used technologies:
Library:React(TS),React-Router-Dom,i18n,Socket.io
StateManager:Redux Toolkit
CSS-Framework:Bootstrap(SCSS)
Builder:Webpack

---

Project architecture:
App-> TopMenu, Main
Main -> NavigationMenu, AppRouter
AppRouter ->Home,Orders,Products

---

Project structure:
src-> App,Assets,Components,Data,Pages,Translation,Utils
App - redux(redux files),styles(main style for app, reset styles), types(type file for all project)
Assets - img for project
Components - Components for pages and etc.
Data - fake data for project
Pages - Pages of app
Translation - json files for i18n
Utils - hooks for interaction with redux, function helpers for receiving date,time, sum of products in order;

---

Pages:
Home - Home page display simple information: time and date, quantity of orders and products, have two links to orders and products
Orders - Orders page display list of orders with quantity, user can delete order(shows modal window) and check products which belongs to order
Products - Products page display list of products with quantity, user can select needed products by type(all,monitors,keyboard,mouses)

---

MainComponents:
TopMenu - Display logo, searchInput(not realized), time and date, visiters counter, user can select language of website(Ukrainian,English)
Main - Contains:
NavigationMenu - Display user image, three links(Home,Orders,Products), user can direct to product, orders, home page
AppRouter - Contains React-Router wrapper(Routes), routes.ts file with routes

---

---

Redux stores states about orders, time and date, modal for deleting orders, modal for products which belong to order, products

---

Project main part client, and only one file server.ts using for up server which counts visiters.

Project start:
Install all needed dependencies by:npm i
Start client only:npm run start or npm run dev:react
Start server only:npm run dev:node
Start both client and server:npm run dev

---

Назва проєкту:Orders-n-Products

Опис:Orders-n-Products вебсайт який дозволяє користувачам проглядати товари і замовлення.

Використані технології:
Library:React(TS),React-Router-Dom,i18n,Socket.io
StateManager:Redux Toolkit
CSS-Framework:Bootstrap(SCSS)
Builder:Webpack

---

Архітектура проєкту:
App-> TopMenu, Main
Main -> NavigationMenu, AppRouter
AppRouter ->Home,Orders,Products

---

Структура проєкту:
src-> App,Assets,Components,Data,Pages,Translation,Utils
App - redux(redux файли),styles(основні стилі для проєкту, стилі скидувачі), types(файл з типами для всього проєкту)
Assets - картинки для проєкту
Components - Компоненти для проєкту.
Data - Вигадані дані для проєкту
Pages - Сторінки проєкту
Translation - json файли для i18n
Utils - хуки для взаємодії redux, функції помічники для отримання дати , часу , суми товарів в замовленні;

---

Сторінки:
Home - Головна сторінка відображає просту інформацію: час і дату, к-сть замовлень і товарів, має два посилання на сторінку товарів і замовленнь.
Orders - Сторінка замовлень відображає список замовлень з к-стю, користувач може видаляти замовлення(з'являється модальне вікно), також проглядати товари які відносяться до замовленнь
Products - Сторінка товарів відображає список товарів з к-стю, користувач може обирати потрібні продуки за селектором по типу(всі,монітори,клавіатури,миші)

---

Основні компоненти:
TopMenu - Відображає лого, пошуковий інпут(не реалізований повністю), час і дату, к-сть користувачів, користувач може обрати мову сайту(Українська,Англійська)
Main - Містить:
NavigationMenu - Відображає картинку користувача, три посилання(Home,Orders,Products), користувач може перейти на сторінку головну, замовлення, товари.
AppRouter - Містить React-Router обгортку(Routes), routes.ts файли в якому прописані всі шляхи.

---

---

Redux зберігає стани про замовлення, час і дату, модальне вікно для видалення замовлень, модальне вікно для відображення товарів які відносяться до замовлень, товарів

---

Основа частина проєкту клієнтська, але один файл server.ts використовується для запуску серверу для підрахунку користувачів

Запуск проєкта:
Встановлення всіх залежностей:npm i
Запуск клієнта:npm run start or npm run dev:react
Запуск сервера:npm run dev:node
Запуск клієнта і сервера:npm run dev
