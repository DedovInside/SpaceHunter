import axios, { AxiosResponse } from 'axios';

// Создаем инстанс axios с базовыми настройками
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Интерцептор для обработки ответов и извлечения данных
api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

// Типы для ответов API
interface GameClickResponse {
  message: string;
  reward: number;
  new_score: number;
  balance: number;
  new_balance: number;
  level: number;
  leveled_up: boolean;
}

interface GameStateResponse {
  balance: number;
  level: number;
  score: number;
  energy: number;
  boost_multiplier: number;
}

// API методы сгруппированы по функциональности
export const gameApi = {
  // Обработка клика (в FlyPage)
  click: (telegramId: number | string) => 
    api.post<any, GameClickResponse>('/game/click', { telegram_id: telegramId }),
  
  // Получение состояния игры пользователя
  getGameState: (telegramId: number | string) => 
    api.get<any, GameStateResponse>(`/game/state/${telegramId}`),
};

export const boostApi = {
  // Получение всех доступных бустов
  getBoosts: () => api.get('/boosts'),
  
  // Покупка буста
  buyBoost: (telegramId: number | string, boostId: number) => 
    api.post('/boosts/buy', { telegram_id: telegramId, boost_id: boostId }),
};

export const userApi = {
  // Получение информации о пользователе
  getUser: (telegramId: number | string) => api.get(`/users/${telegramId}`),
  
  // Регистрация пользователя
  registerUser: (telegramId: number | string, username: string) => 
    api.post('/users/register', { telegram_id: telegramId, username }),
};