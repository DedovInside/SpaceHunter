import { FC, useEffect, useState } from "react";
import { Copy, Send } from "lucide-react";
import { Page } from "@/components/Page.tsx";
import { userApi } from '@/services/api';
import { Spinner } from '@/components/Spinner/Spinner.tsx';
import "./MePage.css";

interface Friend {
  id: number;
  username: string;
  telegram_id: number;
  game_state: {
    balance: number;
    level: number;
  }
}

export const MePage: FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;
  const inviteLink = `https://t.me/space_hunter_game_bot?start=${userId}`;

  useEffect(() => {
    async function loadFriends() {
      try {
        setLoading(true);
        const referrals = await userApi.getUserReferrals(userId);
        setFriends(referrals);
      } catch (error) {
        console.error('Failed to load referrals:', error);
        setFriends([]);
      } finally {
        setLoading(false);
      }
    }
    
    loadFriends();
  }, [userId]);

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Link copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const inviteFriend = () => {
    const message = encodeURIComponent(`Join Space Hunter game! 🚀\n`);
    window.Telegram?.WebApp?.openTelegramLink(`https://t.me/share/url?url=${inviteLink}&text=${message}`);
  };

  // Получаем первую букву имени для заполнителя аватара
  const getInitial = (name: string) => {
    return name && name.length > 0 ? name[0].toUpperCase() : '?';
  };

  // Сортируем друзей по балансу
  const sortedFriends = [...friends].sort((a, b) => 
    (b.game_state?.balance || 0) - (a.game_state?.balance || 0)
  );

  return (
    <Page back={false}>
      <div className="me-page-container">
        <div className="invite-buttons">
          <button className="invite-button" onClick={copyInviteLink}>
            <Copy className="w-5 h-5" />
            Link for friends
          </button>
          <button className="invite-button" onClick={inviteFriend}>
            <Send className="w-5 h-5" />
            Invite friends
          </button>
        </div>

        <div className="friends-section">
          <h2 className="friends-title">YOUR PLAYING FRIENDS</h2>
          {loading ? (
            <div className="spinner-container" style={{backgroundColor: "#2C1B52"}}>
              <Spinner />
            </div>
          ) : (
            <div className="friends-list-container">
              {sortedFriends.length === 0 ? (
                <div className="no-friends">
                  <p>No friends yet. Invite friends to play together!</p>
                </div>
              ) : (
                <div className="friends-list">
                  {sortedFriends.map((friend, index) => (
                    <div key={friend.id} className="friend-item">
                      <span className="friend-position">{index + 1}.</span>
                      <div className="friend-avatar-container">
                        <div className="friend-avatar">
                          {/* Пробуем получить аватар пользователя или показываем заменитель */}
                          {friend.telegram_id ? (
                            <div className="friend-avatar-placeholder">
                              {getInitial(friend.username)}
                            </div>
                          ) : (
                            <div className="friend-avatar-placeholder">
                              {getInitial(friend.username)}
                            </div>
                          )}
                        </div>
                        <span className="friend-name">{friend.username}</span>
                      </div>
                      <div className="friend-info">
                        <span className="friend-coins">
                          {(friend.game_state?.balance || 0).toLocaleString()} coins
                        </span>
                        <span className="friend-nfts">
                          Level: {friend.game_state?.level || 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};