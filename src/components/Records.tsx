import { useEffect, useState } from "react";
import { config } from "src/config";
import { Room } from "src/interfaces";
import { redis } from "src/services/redis";

interface GameCardProps {
  roomId: string;
  lastPlayed?: string;
  description?: string;
  imageUrl?: string;
}

const GameCard = ({
  roomId,
  lastPlayed,
  description,
  imageUrl,
}: GameCardProps) => {
  return (
    <a
      className="card bg-base-100 shadow-xl rounded"
      href={`${config.gameUrl}?roomId=${roomId}`}
    >
      {imageUrl && (
        <figure>
          <img
            src={imageUrl}
            alt={`Room ${roomId.slice(0, 6)}`}
            className="w-full"
          />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title">Room {roomId.slice(0, 6)}</h3>
        {lastPlayed ? <p>Last played: {lastPlayed}</p> : <p>{description}</p>}
      </div>
    </a>
  );
};

export default function Records() {
  const [mostJoinedGames, setMostJoinedGames] = useState<Room[]>([]);

  useEffect(() => {
    (async () => {
      const mostJoinedGames = await redis.getRoomsByJoins();
      setMostJoinedGames(mostJoinedGames);
    })();
  }, []);

  return (
    <section id="records" className="w-full py-12 bg-base-200">
      <div className="container mx-auto">
        {/* Recent Plays Section */}
        {/* <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Recent Plays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPlays.map((game) => (
              <GameCard
                key={game.roomId}
                roomId={game.roomId.slice(0, 4)}
                lastPlayed={game.lastPlayed}
                imageUrl={game.imageUrl}
              />
            ))}
          </div>
        </div> */}

        {/* Most Played Games Section */}
        {mostJoinedGames.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold text-center mb-8">
              Most Played Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mostJoinedGames.map((game, i) => (
                <GameCard
                  key={game.id}
                  roomId={game.id}
                  imageUrl={`/room${i + 1}.jpg`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
