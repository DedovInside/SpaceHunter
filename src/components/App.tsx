import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
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


        <PageHeader farmingRate={1000000} onHelpClick={() => alert('Help clicked')}/>

        <AppRouter />
        
        <NavigationBar />
        </AppRoot>
      </BrowserRouter>
  );
}
