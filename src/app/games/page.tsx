import NavBar from "@/app/components/nav-bar";
import Sidebar from "@/app/components/side-bar";
import GameCard from "@/app/components/game-list";

export default function GamesPage() {

  const jogos = []
  return (
    <div>
      <NavBar active="Game" />
      <div className="flex justify-begin">
        <div className="bg-emerald-600  p-6">
          <h2 className="text-lg font-bold"></h2>

            <Sidebar />

            </div>
      <div className="flex justify-end">
          <h2 className="text-lg font-bold"></h2>

            <GameCard />

                </div>
      
      </div>
      
    </div>
  );
}
