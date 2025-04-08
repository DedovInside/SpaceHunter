import { useEffect, useState, ReactNode } from 'react';
import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { PageHeader } from '@/components/PageHeader/PageHeader.tsx';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar.tsx';
import { Spinner } from '@/components/Spinner/Spinner.tsx';
import { AppRouter } from "@/navigation/AppRouter.tsx";
import { authService } from '@/services/auth';

import axios, { AxiosResponse } from 'axios';

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
        
        // Если аутентификация не удалась, показываем страницу ошибки
        if (!success) {
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
    return (
      <div className="flex items-center justify-center h-screen bg-purple-900">
        <Spinner />
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;

  /*var response = axios.get("http://localhost:8000/");
  response.then(function (res: AxiosResponse) {
    console.log(res.data);
  }).catch(function (error) {
    console.error(error);
  });

  return null;*/
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
          <PageHeader farmingRate={100}/>
          <AppRouter />
          <NavigationBar />
        </AuthWrapper>
      </AppRoot>
    </BrowserRouter>
  );
}


/*import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { PageHeader } from '@/components/PageHeader/PageHeader.tsx';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar.tsx';

import {AppRouter} from "@/navigation/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);


  return (
      <BrowserRouter>
        <AppRoot
          appearance={isDark ? 'dark' : 'light'}
          platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >

        <PageHeader farmingRate={100}/>

        <AppRouter />
        
        <NavigationBar />
        </AppRoot>
      </BrowserRouter>
  );
}
*/
