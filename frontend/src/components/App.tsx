import { useEffect, useState, ReactNode } from 'react';
import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { BrowserRouter, useNavigate } from 'react-router-dom';


import { PageHeader } from '@/components/PageHeader/PageHeader.tsx';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar.tsx';
import { Spinner } from '@/components/Spinner/Spinner.tsx';
import { AppRouter } from "@/navigation/AppRouter.tsx";
import { authService, setLaunchParams } from '@/services/auth';

interface AuthWrapperProps {
  children: ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const lp = useLaunchParams();

  useEffect(() => {
    setLaunchParams(lp);
  }, [lp]);

  useEffect(() => {
    const initAuth = async () => {
      try {
        setIsLoading(true);
        const success = await authService.initializeUser();
        
        setIsAuthenticated(success);
        
        if (!success) {
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