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

  const lp = useLaunchParams();

  useEffect(() => {
    const initAuth = async () => {
      try {
        setIsLoading(true);
        const success = await authService.initializeUser();
        
        setIsAuthenticated(success);
        
        if (success) {
          // Используем сохраненный lp, а не вызываем хук внутри эффекта
          const startParam = lp.startParam;
          const userId = lp.initData?.user?.id || 99281932;
          const username = lp.initData?.user?.username || 'anonymous';

          console.log('Start param:', startParam);
          console.log('User ID:', userId);
          console.log('Username:', username);

          if (startParam) {
            const refId = parseInt(startParam, 10);
            console.log('Referral ID:', refId);
            if (!isNaN(refId) && refId !== userId) {
              try {
                console.log(`Processing referral: User ${userId} invited by ${refId}`);
                
                await userApi.registerWithReferral(userId, username, refId);
                console.log('Referral processed successfully');
              } catch (refError) {
                console.error('Error processing referral:', refError);
              }
            }
          }
        } else {
          console.error('Auth initialization failed - redirecting to error page');
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
  }, [navigate, lp]);

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