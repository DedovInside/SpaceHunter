import { userApi } from './api';

/**
 * Интерфейс для пользователя Telegram
 */
export interface TelegramUser {
  id: number | string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

/**
 * Сервис для авторизации и регистрации пользователей
 */

let isInitializing = false;
let launchParams: any = null;

export const setLaunchParams = (params: any) => {
  launchParams = params;
};

export const authService = {
  /**
   * Инициализирует пользователя: проверяет авторизацию и при необходимости регистрирует
   * @returns Promise<boolean> - успешность операции
   */
  async initializeUser(): Promise<boolean> {
    // Сохраняем существующую логику блокировки параллельных вызовов
    if (isInitializing) {
      console.log("Initialization already in progress, waiting...");
      while (isInitializing) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return true;
    }
  
    try {
      isInitializing = true;
  
      // Режим разработки остаётся неизменным
      if (import.meta.env.DEV) {
        await this.waitForMockData();
      }
      
      // Извлекаем данные пользователя из Telegram WebApp
      const telegramData = window.Telegram?.WebApp?.initDataUnsafe?.user as any;
      
      if (!telegramData || !telegramData.id) {
        return import.meta.env.DEV 
          ? await this.handleDevelopmentMode() 
          : false;
      }
      
      // Получаем базовую информацию пользователя
      const telegramId = Number(telegramData.id);
      const username = telegramData.username || `user_${telegramId}`;
      
      // Проверяем реферальный параметр используя launchParams
      const startParam = launchParams?.startParam;
      
      if (startParam) {
        const refId = parseInt(startParam, 10);
        console.log('Start param found:', startParam);
        console.log('Referral ID:', refId);
        
        if (!isNaN(refId) && refId !== telegramId) {
          try {
            console.log(`Using referral registration: User ${telegramId} invited by ${refId}`);
            
            // Вместо обычной регистрации используем реферальную
            const response = await userApi.registerWithReferral(telegramId, username, refId);
            console.log('User registered with referral:', response);
            return true;
          } catch (refError) {
            console.error('Error during referral registration:', refError);
            
            // Если реферальная регистрация не сработала, пробуем обычную
            return await this.handleTelegramAuthorization(telegramData);
          }
        }
      }
      
      // Если нет реферального параметра, используем обычную авторизацию
      return await this.handleTelegramAuthorization(telegramData);
      
    } catch (error) {
      console.error('Error initializing user:', error);
      return false;
    } finally {
      isInitializing = false;
    }
  },
  
  /**
   * Ожидание загрузки мокированных данных в режиме разработки
   */
  async waitForMockData(): Promise<void> {
    console.log("Waiting for mock data to load ABOBA...");
    await new Promise(resolve => setTimeout(resolve, 500));
    //console.log("Telegram WebApp after waiting:", window.Telegram?.WebApp);
    //console.log("User data after waiting:", window.Telegram?.WebApp?.initDataUnsafe?.user);
  },
  
  /**
   * Обработка авторизации в режиме разработки
   */
  async handleDevelopmentMode(): Promise<boolean> {
    console.log('Using hardcoded mock data for development');
    const mockId = 99281932; // ID для режима разработки
    
    try {
      // Пытаемся найти пользователя
      const user = await userApi.getUser(mockId);
      console.log('Development user found:', user);
      return true;
    } catch (error) {
      // Если пользователь не найден, регистрируем нового
      if (this.isNotFoundError(error)) {
        return await this.registerDevelopmentUser(mockId);
      }
      
      console.error('Unexpected error in development mode:', error);
      return false;
    }
  },
  
  /**
   * Регистрация пользователя в режиме разработки
   */
  async registerDevelopmentUser(mockId: number): Promise<boolean> {
    try {
      console.log('Attempting to register development user with ID:', mockId);
      const newUser = await userApi.registerUser(mockId, `dev_user_${mockId}`);
      console.log('Development user registered:', newUser);
      return true;
    } catch (regError) {
      console.error('Failed to register development user:', regError);
      return false;
    }
  },
  
  /**
   * Обработка авторизации с данными из Telegram
   */
  async handleTelegramAuthorization(telegramData: any): Promise<boolean> {
    const telegramId = Number(telegramData.id);
    
    try {
      // Пробуем получить существующего пользователя
      const user = await userApi.getUser(telegramId);
      console.log('User already registered:', user);
      return true;
    } catch (error) {
      // Если пользователь не найден, регистрируем нового
      if (this.isNotFoundError(error)) {
        return await this.registerTelegramUser(telegramData, telegramId);
      }
      
      console.error('Unexpected error during Telegram authorization:', error);
      return false;
    }
  },
  
  /**
   * Регистрация нового пользователя из Telegram
   */
  async registerTelegramUser(telegramData: any, telegramId: number): Promise<boolean> {
    try {
      const username = telegramData.username || `user_${telegramId}`;
      const newUser = await userApi.registerUser(telegramId, username);
      console.log('User registered:', newUser);
      return true;
    } catch (regError) {
      console.error('Failed to register Telegram user:', regError);
      return false;
    }
  },
  
  /*
   * Проверка, является ли ошибка ошибкой "Не найдено"
   */
  isNotFoundError(error: any): boolean {
    console.log("Error structure:", JSON.stringify(error)); // Добавьте для дебага
    return error && 
      (error.status === 404 || 
       error.detail === 'User not found' || // Измените это условие
       error.message?.includes('Not Found'));
  }
};