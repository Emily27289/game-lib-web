"use client";

import { useState } from "react";

export default function Sidebar({ games, onSelectGame, selectedGameId, loading }) {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games?.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <aside className="min-w-1/3 bg-emerald-600 p-6">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="rounded-lg p-2 w-full bg-emerald-400 text-emerald-950 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="overflow-y-auto max-h-screen">
          {loading ? (
            <p className="text-white">Carregando jogos...</p>
          ) : filteredGames.length > 0 ? (
            <ul className="mt-2 text-left">
              {filteredGames.map((game) => (
                <li 
                  key={game.id} 
                  className={`p-2 rounded-md cursor-pointer transition-colors duration-200 mb-1 ${
                    selectedGameId === game.id 
                      ? "bg-emerald-800 text-white font-bold" 
                      : "text-emerald-950 hover:bg-emerald-500"
                  }`}
                  onClick={() => onSelectGame(game)}
                >
                  {game.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-emerald-950">Nenhum jogo encontrado</p>
          )}
        </div>
      </div>
    </aside>
  );
}