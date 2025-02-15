import { FC } from "react";
import { Copy, Send } from "lucide-react";
import { Page } from "@/components/Page.tsx";
import "./MePage.css";

interface Friend {
  id: number;
  name: string;
  coins: number;
  nfts: number;
}

const friends: Friend[] = [
  { id: 1, name: "BROO", coins: 434832428272, nfts: 21 },
  { id: 2, name: "BROO", coins: 5000000000, nfts: 13 },
  { id: 3, name: "BROO", coins: 341312311, nfts: 10 },
  { id: 4, name: "BROO", coins: 21312312, nfts: 6 },
  { id: 5, name: "BROO", coins: 10000000000, nfts: 76 },
  { id: 6, name: "BROO", coins: 1212321321312, nfts: 82 },
  { id: 7, name: "BROO", coins: 1343141241241, nfts: 87 },
  { id: 8, name: "BROO", coins: 1545325325235, nfts: 92 },
  { id: 9, name: "BROO", coins: 1625324535352, nfts: 101 },
  { id: 10, name: "BROO", coins: 1798298080804, nfts: 113 },
  { id: 11, name: "BROO", coins: 19392139113131, nfts: 125 },
  
];

export const MePage: FC = () => {
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || "unknown";
  const inviteLink = `https://t.me/space_hunter_game_bot?start=${userId}`;

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Link copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const inviteFriend = () => {
    const message = encodeURIComponent(`Join Space Hunter game! 🚀\n${inviteLink}`);
    window.Telegram?.WebApp?.openTelegramLink(`https://t.me/share/url?url=${inviteLink}&text=${message}`);
  };

  // Сортируем друзей по количеству монет
  const sortedFriends = [...friends].sort((a, b) => b.coins - a.coins);

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
          <div className="friends-list-container">
            <div className="friends-list">
              {sortedFriends.map((friend, index) => (
                <div key={friend.id} className="friend-item">
                  <span className="friend-position">{index + 1}.</span>
                  <div className="friend-avatar-container">
                    <div className="friend-avatar"></div>
                    <span className="friend-name">{friend.name}</span>
                  </div>
                  <div className="friend-info">
                    <span className="friend-coins">{friend.coins.toLocaleString()} coins</span>
                    <span className="friend-nfts">NFTs: {friend.nfts}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
