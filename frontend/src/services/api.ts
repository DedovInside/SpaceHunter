import axios, { AxiosResponse } from 'axios';

// Создаем инстанс axios с базовыми настройками
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Базовый URL для API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для обработки ответов и извлечения данных
api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  error => {
    // Добавляем более подробный вывод ошибки
    console.error('API Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
      method: error.config?.method,
    });
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

interface Boost {
  boost_id: number;
  name: string;
  category: string;
  description: string;
  icon_name: string;
  passive_income: number;
  click_multiplier: number;
  level: number;
  max_level: number;
  current_cost: number;
}

interface UpgradeBoostResponse {
  boost_id: number;
  name: string;
  level: number;
  max_level: number;
  new_balance: number;
  new_cost: number;
  new_passive_income: number;
  new_click_multiplier: number;
}

// API методы сгруппированы по функциональности
export const gameApi = {
  // Обработка клика (в FlyPage)
  click: (telegramId: number | string) => 
    api.post<any, GameClickResponse>(`/game/click?telegram_id=${telegramId}`),
  
  // Получение состояния игры пользователя
  getGameState: (telegramId: number | string) => 
    api.get<any, GameStateResponse>(`/game/state/${telegramId}`),


  // Получение пассивного дохода
  getPassiveIncome: (telegramId: number | string) => 
    api.get<any, {
      passive_income_rate: number,
      accumulated_income: number,
      max_accumulation_time: number,
      time_accumulated: number
    }>(`/game/passive_income/${telegramId}`),


  applyReturningIncome: (telegramId: number | string) => 
    api.post<any, { 
      applied_income: number,
      new_balance: number 
    }>(`/game/apply_returning_income/${telegramId}`),


  // Получение пассивного дохода при нахождении в игре
  applyPassiveIncome: (telegramId: number | string) => 
    api.post<any, { 
      applied_income: number,
      new_balance: number 
    }>(`/game/apply_passive_income/${telegramId}`),
};

export const boostApi = {
  // Получение всех бустов для пользователя
  getUserBoosts: (telegramId: number | string) => 
    api.get<any, Boost[]>(`/boosts/user/${telegramId}`),
  
  // Улучшение буста
  upgradeBoost: (telegramId: number | string, boostId: number) => 
    api.post<any, UpgradeBoostResponse>('/boosts/upgrade', { 
      telegram_id: telegramId, 
      boost_id: boostId 
    }),
};
 
export const userApi = {
  // Получение информации о пользователе
  getUser: (telegramId: number | string) => api.get(`/users/${telegramId}`),
  
  // Регистрация пользователя
  registerUser: (telegramId: number | string, username: string) => 
    api.post('/users/register', { telegram_id: telegramId, username }),


  // Получение списка рефералов пользователя
  // Заменить текущую реализацию метода на:
getUserReferrals: (telegramId: number | string) => 
  api.get<any, any[]>(`/users/referrals/${telegramId}`),
};