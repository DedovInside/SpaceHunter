import { FC } from 'react';
import { Page } from '@/components/Page.tsx';

export const ErrorPage: FC = () => {
  return (
    <Page back={false}>
      <div className="fly-page-container">
        <div className="flex flex-col items-center justify-center h-[80vh] p-4">
          <h1 className="text-3xl font-bold text-white mb-4">Ошибка подключения</h1>
          <p className="text-white text-center mb-8 max-w-md">
            Не удалось подключиться к серверу игры или авторизовать пользователя.
            Пожалуйста, проверьте соединение и попробуйте снова.
          </p>
          <button 
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg text-lg font-medium"
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </button>
        </div>
      </div>
    </Page>
  );
};