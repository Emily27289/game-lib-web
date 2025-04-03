"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/game-card";
import NavBar from "@/components/nav-bar";
import Sidebar from "@/components/side-bar";
import { getGames } from "../actions/game-actions";

export default function LibraryPage() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
        if (gamesData.length > 0) {
          setSelectedGame(gamesData[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  const handleSelectGame = (game: any) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <NavBar active="Library" />
      <div className="flex justify-begin max-w-full">
        <Sidebar games={games} onSelectGame={handleSelectGame} selectedGameId={selectedGame?.id} loading={loading} />
        {selectedGame ? (
          <GameCard game={selectedGame} />
        ) : (
          <div className="flex flex-col items-center justify-center w-full p-10 bg-emerald-800 text-white">
            {loading ? "Carregando jogos..." : "Selecione um jogo para ver os detalhes"}
          </div>
        )}
      </div>
    </div>
  );
}