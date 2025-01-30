import type { FC } from 'react';
import { Wallet } from 'lucide-react';
import { Page } from '@/components/Page.tsx';

export const MePage: FC = () => {
  return (
    <Page back={false}>
      <div className="pt-20 pb-20 p-4 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold mb-8">
          {(32532532).toLocaleString()} Coins
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          Connect TON Wallet
        </button>
      </div>
    </Page>
  );
}