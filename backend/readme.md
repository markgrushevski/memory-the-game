# Backend

## Описание проекта
Этот проект представляет собой backend-часть web-игры. Backend предоставляет API для взаимодействия с таблицами "cards", "games" и "players".

## API Endpoints

### Карты (Cards)
- Получить все карты: `GET /api/cards/`

### Игры (Games)
- Получить все игры: `GET /api/games/`

### Игроки (Players)
- Получить всех игроков: `GET /api/players/`

### Перемешанные карты
- Получить перемешанные карты по количеству: `GET /api/shuffledCards/<int:number>/`
  - Где `<int:number>` - количество карт, которое нужно достать и перемешать.

## Инструкция по локальной развёртке
- Выполнить команду сборки проекта: pip install --upgrade poetry && poetry build && poetry install
- ...