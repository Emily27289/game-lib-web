import NavBar from "@/app/components/nav-bar";
import Sidebar from "@/app/components/side-bar";
import GameCard from "@/app/components/game-list";

export default function GamesPage() {

  const jogos = []
  return (
    <div>
<<<<<<< HEAD
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
      
=======
      <NavBar active= "Game" />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Lista de Jogos</h1>
        <p>Jogos</p>
>>>>>>> fa2830acfab7481045aed82ab80d6489c0fab8c2
      </div>
      
    </div>
  );
}
