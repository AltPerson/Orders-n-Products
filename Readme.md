Project name:Orders-n-Products

Description:Orders-n-Products is a website that allows users to view orders and products.

Used technologies:
<br>
Library:React(TS),React-Router-Dom,i18n,Socket.io
<br>
StateManager:Redux Toolkit
<br>
CSS-Framework:Bootstrap(SCSS)
<br>
Builder:Webpack

---

Project architecture:
<br>
App-> TopMenu, Main
<br>
Main -> NavigationMenu, AppRouter
<br>
AppRouter ->Home,Orders,Products

---

Project structure:
<br>
src-> App,Assets,Components,Data,Pages,Translation,Utils
<br>
App - redux(redux files),styles(main style for app, reset styles), types(type file for all project)
<br>
Assets - img for project
<br>
Components - Components for pages and etc.
<br>
Data - fake data for project
<br>
Pages - Pages of app
<br>
Translation - json files for i18n
<br>
Utils - hooks for interaction with redux, function helpers for receiving date,time, sum of products in order;

---

Pages:
<br>
Home - Home page display simple information: time and date, quantity of orders and products, have two links to orders and products
<br>
Orders - Orders page display list of orders with quantity, user can delete order(shows modal window) and check products which belongs to order
<br>
Products - Products page display list of products with quantity, user can select needed products by type(all,monitors,keyboard,mouses)

---

MainComponents:
<br>
TopMenu - Display logo, searchInput(not realized), time and date, visiters counter, user can select language of website(Ukrainian,English)
<br>
Main - Contains:
<br>
NavigationMenu - Display user image, three links(Home,Orders,Products), user can direct to product, orders, home page
<br>
AppRouter - Contains React-Router wrapper(Routes), routes.ts file with routes

---

---

Redux stores states about orders, time and date, modal for deleting orders, modal for products which belong to order, products

---

Project main part client, and only one file server.ts using for up server which counts visiters.

Project start:
<br>
Install all needed dependencies by:npm i
<br>
Start client only:npm run start or npm run dev:react
<br>
Start server only:npm run dev:node
<br>
Start both client and server:npm run dev


---

Назва проєкту:Orders-n-Products

Опис:Orders-n-Products вебсайт який дозволяє користувачам проглядати товари і замовлення.

Використані технології:
<br>
Library:React(TS),React-Router-Dom,i18n,Socket.io
<br>
StateManager:Redux Toolkit
<br>
CSS-Framework:Bootstrap(SCSS)
<br>
Builder:Webpack

---

Архітектура проєкту:
<br>
App-> TopMenu, Main
<br>
Main -> NavigationMenu, AppRouter
<br>
AppRouter ->Home,Orders,Products

---

Структура проєкту:
<br>
src-> App,Assets,Components,Data,Pages,Translation,Utils
<br>
App - redux(redux файли),styles(основні стилі для проєкту, стилі скидувачі), types(файл з типами для всього проєкту)
<br>
Assets - картинки для проєкту
<br>
Components - Компоненти для проєкту.
<br>
Data - Вигадані дані для проєкту
<br>
Pages - Сторінки проєкту
<br>
Translation - json файли для i18n
<br>
Utils - хуки для взаємодії redux, функції помічники для отримання дати , часу , суми товарів в замовленні;
<br>

---

Сторінки:
<br>
Home - Головна сторінка відображає просту інформацію: час і дату, к-сть замовлень і товарів, має два посилання на сторінку товарів і замовленнь.
<br>
Orders - Сторінка замовлень відображає список замовлень з к-стю, користувач може видаляти замовлення(з'являється модальне вікно), також проглядати товари які відносяться до замовленнь
<br>
Products - Сторінка товарів відображає список товарів з к-стю, користувач може обирати потрібні продуки за селектором по типу(всі,монітори,клавіатури,миші)

---

Основні компоненти:
<br>
TopMenu - Відображає лого, пошуковий інпут(не реалізований повністю), час і дату, к-сть користувачів, користувач може обрати мову сайту(Українська,Англійська)
<br>
Main - Містить:
<br>
NavigationMenu - Відображає картинку користувача, три посилання(Home,Orders,Products), користувач може перейти на сторінку головну, замовлення, товари.
<br>
AppRouter - Містить React-Router обгортку(Routes), routes.ts файли в якому прописані всі шляхи.

---

---

Redux зберігає стани про замовлення, час і дату, модальне вікно для видалення замовлень, модальне вікно для відображення товарів які відносяться до замовлень, товарів

---

Основа частина проєкту клієнтська, але один файл server.ts використовується для запуску серверу для підрахунку користувачів

Запуск проєкта:
<br>
Встановлення всіх залежностей:npm i
<br>
Запуск клієнта:npm run start or npm run dev:react
<br>
Запуск сервера:npm run dev:node
<br>
Запуск клієнта і сервера:npm run dev
