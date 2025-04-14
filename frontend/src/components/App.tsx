import { useEffect, useState, ReactNode } from 'react';
import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { PageHeader } from '@/components/PageHeader/PageHeader.tsx';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar.tsx';
import { Spinner } from '@/components/Spinner/Spinner.tsx';
import { AppRouter } from "@/navigation/AppRouter.tsx";
import { authService } from '@/services/auth';
import { gameApi } from '@/services/api';

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
          // Apply returning income when user comes back to the app
          try {
            const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;
            const result = await gameApi.applyReturningIncome(userId);
            
            // Show notification if income was collected
            if (result.applied_income > 0) {
              console.log(`Welcome back! You collected ${result.applied_income} CSM while away.`);
              // You could add a toast notification here
            }
          } catch (passiveError) {
            console.error('Error applying returning income:', passiveError);
          }
          
          // Redirect to main page if needed
          const currentPath = window.location.pathname;
          if (currentPath === '/SpaceHunter/error' || currentPath === '/' || currentPath === '/SpaceHunter/') {
            navigate('/SpaceHunter/fly');
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