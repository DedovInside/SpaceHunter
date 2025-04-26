import axios, { AxiosResponse } from 'axios';

// Создаем инстанс axios с базовыми настройками
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // Динамический базовый URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для обработки ответов и извлечения данных
api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  error => {
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

export interface GameClickResponse {
  message: string;
  reward: number;
  new_score: number;
  balance: number;
  new_balance: number;
  level: number;
  leveled_up: boolean;
  energy: number;
}

export interface GameStateResponse {
  balance: number;
  level: number;
  score: number;
  energy: number;
  boost_multiplier: number;
}

export interface Boost {
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

export interface UpgradeBoostResponse {
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

export interface TaskResponse {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'permanent';
  reward: number;
  condition_value: number;
  condition_type: string;
}

export interface UserTaskResponse {
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

export interface DailyBonusResult {
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

export interface WalletStatus {
  is_connected: boolean;
  address: string | null;
}

// API методы
export const gameApi = {
  click: (telegramId: number | string) => 
    api.post<any, GameClickResponse>(`/game/click?telegram_id=${telegramId}`),
  getGameState: (telegramId: number | string) => 
    api.get<any, GameStateResponse>(`/game/state/${telegramId}`),
  getPassiveIncome: (telegramId: number | string) => 
    api.get<any, { passive_income_rate: number, accumulated_income: number, max_accumulation_time: number, time_accumulated: number }>(`/game/passive_income/${telegramId}`),
  applyReturningIncome: (telegramId: number | string) => 
    api.post<any, { applied_income: number, new_balance: number }>(`/game/apply_returning_income/${telegramId}`),
  applyPassiveIncome: (telegramId: number | string) => 
    api.post<any, { applied_income: number, new_balance: number }>(`/game/apply_passive_income/${telegramId}`),
  getEnergyState: (telegramId: number | string) => 
    api.get<any, { current_energy: number, energy_to_restore: number, max_energy: number }>(`/game/energy/${telegramId}`),
  applyEnergyRestore: (telegramId: number | string) => 
    api.post<any, { new_energy: number, restored_amount: number, max_energy: number }>(`/game/energy/restore/${telegramId}`),
};

export const boostApi = {
  getUserBoosts: (telegramId: number | string) => 
    api.get<any, Boost[]>(`/boosts/user/${telegramId}`),
  upgradeBoost: (telegramId: number | string, boostId: number) => 
    api.post<any, UpgradeBoostResponse>('/boosts/upgrade', { telegram_id: telegramId, boost_id: boostId }),
};

export const taskApi = {
  getUserTasks: (telegramId: number | string) => 
    api.get<any, UserTaskResponse[]>(`/tasks/user/${telegramId}`),
  getTasks: () => 
    api.get<any, TaskResponse[]>('/tasks'),
  checkTask: (telegramId: number | string, taskId: number) =>
    api.post<any, UserTaskResponse>('/tasks/check', { telegram_id: telegramId, task_id: taskId }),
  claimTaskReward: (telegramId: number | string, taskId: number) => 
    api.post<any, { success: boolean; reward?: number; new_balance?: number; task_id?: number; error?: string }>(`/tasks/claim/${telegramId}/${taskId}`),
  checkTasksProgress: (telegramId: number | string) => 
    api.post<any, { success: boolean; completed_tasks: number[] }>(`/tasks/check_progress/${telegramId}`),
  checkDailyReset: (telegramId: number | string) => 
    api.post<any, { success: boolean; was_reset: boolean }>(`/tasks/daily_reset/${telegramId}`),
};

export const userApi = {
  getUser: (telegramId: number | string) => api.get(`/users/${telegramId}`),
  registerUser: (telegramId: number | string, username: string) => 
    api.post('/users/register', { telegram_id: telegramId, username }),
  getUserReferrals: (telegramId: number | string) => 
    api.get<any, any[]>(`/users/referrals/${telegramId}`),
};

export const nftApi = {
  getCategories: () => 
    api.get<any, NFTCategory[]>('/nft/categories'),
  getUserCollection: (telegramId: number | string) => 
    api.get<any, UserNFT[]>(`/nft/user/${telegramId}`),
  getAvailableNFTs: (telegramId: number | string) => 
    api.get<any, NFT[]>(`/nft/available/${telegramId}`),
  autoUnlockNFTs: (telegramId: number | string) => 
    api.post<any, UserNFT[]>(`/nft/auto-unlock/${telegramId}`),
};

export const bonusApi = {
  getDailyBonusStatus: (telegramId: number | string) =>
    api.get<any, DailyBonusStatus>(`/bonus/daily/status/${telegramId}`),
  claimDailyBonus: (telegramId: number | string) =>
    api.post<any, DailyBonusResult>(`/bonus/daily/claim/${telegramId}`),
  getDailyBonusConfig: () =>
    api.get<any, DailyBonusConfig[]>('/bonus/daily/config'),
};

export const walletApi = {
  connectWallet: async (telegramId: number, address: string) => {
    return api.post(`/wallet/${telegramId}/connect`, { address });
  },
  getWalletStatus: async (telegramId: number): Promise<WalletStatus> => {
    const response = await api.get<any, WalletStatus>(`/wallet/${telegramId}/status`);
    console.log('Wallet status response:', response);
    return response;
  },
  disconnectWallet: async (telegramId: number) => {
    return api.delete(`/wallet/${telegramId}/disconnect`);
  },
};