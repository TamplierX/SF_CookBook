# Фуллстек-приложение для рецептов блюд

Это фуллстек-приложение позволяет просматривать рецепты блюд, разделенные по категориям. Приложение состоит из двух частей: бэкенда на Django REST Framework и фронтенда на React с использованием React Router для навигации. Бэкенд предоставляет API с автодокументацией OpenAPI+Swagger.

## Структура проекта
```plaintext
SF_CookBook/
├── cookbook_backend/       # Код для API на Django REST Framework
│   ├── api/                # Основное приложение с логикой API
│   ├── cookbook/           # Основной каталог проекта
│   ├── db.sqlite3          # Локальная база данных (SQLite)
│   ├── manage.py           # Django точка запуска
│   └── requirements.txt    # Зависимости для Python
├── cookbook_frontend/      # Исходный код клиентской части React
│   ├── src/                # Компоненты и бизнес-логика
│   ├── .babelrc            # конфмгурация Babel
│   ├── package.json        # Зависимости фронтенда
│   ├── webpack.config.js   # Конфигурация Webpak'а для режима разработки
│   └── webpack.prod.js     # Конфигурация Webpak'а для режима продакшена
└── README.md               # Описание
```
## Требования

- Python 3.8+
- Node.js
- npm или yarn для управления зависимостями.

## Установка и запуск

### Бэкенд

1. Перейдите в директорию `cookbook_backend`:

    ```bash
    cd cookbook_backend
    ```
   
2. Создайте виртуальное окружение и активируйте его:

    ```bash
    python -m venv venv
    source venv/bin/activate  # Для Windows: venv\Scripts\activate
    ```
   
3. Установите зависимости:
    
   ```bash
    pip install -r requirements.txt
    ```

4. Примените миграции:

    ```bash
    python manage.py migrate
    ```

5. Запустите сервер разработки:

    ```bash
    python manage.py runserver
    ```

6. Документация API доступна по адресу:
[http://127.0.0.1:8000/api/docs/](http://127.0.0.1:8000/api/docs/),
[http://127.0.0.1:8000/api/redoc/](http://127.0.0.1:8000/api/redoc/)

### Фронтенд

1. Перейдите в директорию `cookbook_frontend`:

    ```bash
    cd cookbook_frontend
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Запустите сервер разработки:

    ```bash
    npm run start
    ```

4. Приложение будет доступно по адресу: [http://localhost:8080](http://localhost:8080)

## Функциональные возможности

### Бэкенд

- API для работы с рецептами:
  - Получение списка всех категорий. 
  - Получение информации о конкретной категории. 
  - Получение списка всех рецептов. 
  - Детальный просмотр конкретного рецепта. 
- Поддержка OpenAPI-спецификации (Swagger). 
- Полностью документированное API.

### Фронтенд

- Главная страница с отображением списка категорий.
- Страница просмотра рецептов определенной категории.
- Страница с детальной информацией по конкретному рецепту.
- Удобный и адаптивный пользовательский интерфейс с поддержкой маршрутизации через React Router.

## Описание функционала

### Бэкенд

- **Модели**:
  - `Category`: Категории рецептов.
  - `Recipe`: Рецепты блюд.

- **Сериализаторы**:
  - `CategorySerializer`: Сериализатор для модели `Category`.
  - `RecipeSerializer`: Сериализатор для модели `Recipe`.

- **Представления**:
  - `CategoryViewSet`: Представление для работы с категориями.
  - `RecipeViewSet`: Представление для работы с рецептами.

- **URLs**:
  - `/api/categories/`: Получение списка категорий.
  - `/api/categories/{id}/`: Получение деталей категории.
  - `/api/recipes/`: Получение списка всех рецептов.
  - `/api/recipes/{id}/`: Получение деталей рецепта.

### Фронтенд

- **Страницы**:
  - **Главная страница** (`/`): Отображает список категорий.
  - **Страница категории** (`/categories/:id`): Отображает список рецептов в выбранной категории.
  - **Страница рецепта** (`/categories/:id/recipes/:id`): Отображает детали выбранного рецепта.

- **Компоненты**:
  - `CategoryList`: Список категорий.
  - `RecipeList`: Список рецептов в категории.
  - `RecipeDetail`: Детали рецепта.

- **Навигация**:
  - Используется `react-router` для навигации между страницами.
