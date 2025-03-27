
import GameCard from "@/components/game-card";
import NavBar from "@/components/nav-bar";
import Sidebar from "@/components/side-bar";

export default function GamesPage() {

  const jogos = []
  return (
    <div>
      <NavBar active="Game" />
      <div className="flex justify-begin max-w-full">
        <Sidebar />
        <GameCard />
      </div>
    </div>
  );
}
