import { useEffect, useState, ReactNode } from 'react';
import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { userApi } from '@/services/api';
import { PageHeader } from '@/components/PageHeader/PageHeader.tsx';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar.tsx';
import { Spinner } from '@/components/Spinner/Spinner.tsx';
import { AppRouter } from "@/navigation/AppRouter.tsx";
import { authService } from '@/services/auth';

interface AuthWrapperProps {
  children: ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      try {
        setIsLoading(true);
        const success = await authService.initializeUser();
        
        setIsAuthenticated(success);
        
        if (success) {
          // Обработка реферального параметра
          const lp = useLaunchParams();
          const startParam = lp.startParam;
          const userId = lp.initData?.user?.id || 99281932;
          const username = lp.initData?.user?.username || 'anonymous';

          console.log('Start param:', startParam); // Для отладки

          if (startParam) {
            // Преобразуем параметр в число
            const refId = parseInt(startParam, 10);
            if (!isNaN(refId) && refId !== userId) { // Проверяем, что это не сам пользователь
              try {
                console.log(`Processing referral: User ${userId} invited by ${refId}`);
                
                // Используем метод из API
                await userApi.registerWithReferral(userId, username, refId);
                console.log('Referral processed successfully');
              } catch (refError) {
                console.error('Error processing referral:', refError);
              }
            }
          }
          
        } else {
          navigate('/SpaceHunter/error');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        navigate('/SpaceHunter/error');
      } finally {
        setIsLoading(false);
      }
    };
  
    initAuth();
  }, [navigate]);

  if (isLoading) {
    return (<Spinner />);
  }

  return isAuthenticated ? <>{children}</> : null;
}

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  return (
    <BrowserRouter>
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        <AuthWrapper>
          <PageHeader />
          <AppRouter />
          <NavigationBar />
        </AuthWrapper>
      </AppRoot>
    </BrowserRouter>
  );
}