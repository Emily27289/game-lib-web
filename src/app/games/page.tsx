import NavBar from "@/app/components/nav-bar";

export default function GamesPage() {
  return (
    <div>
      <NavBar active= "Game" />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Lista de Jogos</h1>
        <p>Jogos</p>
      </div>
    </div>
  );
}
