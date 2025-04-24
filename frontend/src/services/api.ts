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
  energy: number;
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

export interface NFT {
  id: number;
  name: string;
  description: string | null;
  image_path: string;
  category_id: number;
  coins_threshold: number;
}

export interface NFTCategory {
  id: number;
  name: string;
  description: string | null;
  nfts: NFT[];
}

export interface UserNFT {
  user_id: number;
  nft_id: number;
  nft: NFT;
  acquired_at: string;
}

interface TaskResponse {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'permanent';
  reward: number;
  condition_value: number;
  condition_type: string;
}

interface UserTaskResponse {
  id: number;
  task: TaskResponse;
  progress: number;
  is_completed: boolean;
  is_claimed: boolean;
}

export interface DailyBonusStatus {
  current_day: number;
  can_claim: boolean;
  last_claimed: string | null;
  days_streak: number;
}

interface DailyBonusResult {
  success: boolean;
  message: string;
  reward_type: string;
  reward_amount: number;
  current_day: number;
  next_day: number;
  can_claim: boolean;
  last_claimed_date: string;
  new_balance: number | null;
}

export interface DailyBonusConfig {
  day: number;
  type: string;
  amount: number;
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

  // Получение состояния энергии
  getEnergyState: (telegramId: number | string) => 
    api.get<any, {
        current_energy: number,
        energy_to_restore: number,
        max_energy: number
    }>(`/game/energy/${telegramId}`),

  // Применение восстановления энергии
  applyEnergyRestore: (telegramId: number | string) => 
    api.post<any, {
        new_energy: number,
        restored_amount: number,
        max_energy: number
    }>(`/game/energy/restore/${telegramId}`)
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

// В объект taskApi добавьте следующие методы:

export const taskApi = {
  // Существующие методы...
  getUserTasks: (telegramId: number | string) => 
    api.get<any, UserTaskResponse[]>(`/tasks/user/${telegramId}`),
  
  getTasks: () => 
    api.get<any, TaskResponse[]>('/tasks'),
    
  checkTask: (telegramId: number | string, taskId: number) =>
    api.post<any, UserTaskResponse>('/tasks/check', {
      telegram_id: telegramId,
      task_id: taskId
    }),
    
  // Добавляем новый метод для получения награды за задание
  claimTaskReward: (telegramId: number | string, taskId: number) => 
    api.post<any, {
      success: boolean;
      reward?: number;
      new_balance?: number;
      task_id?: number;
      error?: string;
    }>(`/tasks/claim/${telegramId}/${taskId}`),
    
  // Новые методы для работы с заданиями
  checkTasksProgress: (telegramId: number | string) => 
    api.post<any, {
      success: boolean;
      completed_tasks: number[];
    }>(`/tasks/check_progress/${telegramId}`),
    
  checkDailyReset: (telegramId: number | string) => 
    api.post<any, {
      success: boolean;
      was_reset: boolean;
    }>(`/tasks/daily_reset/${telegramId}`)
}
 
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

export const nftApi = {
  // Получение всех категорий NFT
  getCategories: () => 
    api.get<any, NFTCategory[]>('/nft/categories'),
  
  // Получение коллекции пользователя
  getUserCollection: (telegramId: number | string) => 
    api.get<any, UserNFT[]>(`/nft/user/${telegramId}`),
  
  // Получение доступных NFT
  getAvailableNFTs: (telegramId: number | string) => 
    api.get<any, NFT[]>(`/nft/available/${telegramId}`),
  
  // Автоматическая разблокировка всех доступных NFT
  autoUnlockNFTs: (telegramId: number | string) => 
    api.post<any, UserNFT[]>(`/nft/auto-unlock/${telegramId}`)
};

export const bonusApi = {
  // Получить статус ежедневных бонусов
  getDailyBonusStatus: (telegramId: number | string) =>
    api.get<any, DailyBonusStatus>(`/bonus/daily/status/${telegramId}`),

  // Забрать ежедневный бонус
  claimDailyBonus: (telegramId: number | string) =>
    api.post<any, DailyBonusResult>(`/bonus/daily/claim/${telegramId}`),

  // Получить конфигурацию бонусов
  getDailyBonusConfig: () =>
    api.get<any, DailyBonusConfig[]>('/bonus/daily/config'),
};


// Добавьте методы для работы с кошельком
export const walletApi = {
  connectWallet: async (telegramId: number, address: string) => {
      const response = await axios.post(`$/wallet/${telegramId}/connect`, { address });
      return response.data;
  },
  
  getWalletStatus: async (telegramId: number) => {
      const response = await axios.get(`$/wallet/${telegramId}/status`);
      return response.data;
  },
  
  disconnectWallet: async (telegramId: number) => {
      const response = await axios.delete(`$/wallet/${telegramId}/disconnect`);
      return response.data;
  }
};