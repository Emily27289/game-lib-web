import GameCard from "./game-card";

export default function GameList() {
  return (
      <div className="flex-begin bg-emerald-800 text-white p-6">
        <GameCard title="CAPA JOGO X" />
        <div className="flex-begin bg-emerald-400 text-white p-6">
          <GameCard title="JOGO X" />
        </div>
      </div>
  );
}
