export default function GameCard({ game }: any) {
  const formatDate = (dateString: any) => {
    if (!dateString) return "Data não disponível";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  const categoryDisplayNames = {
    "ACTION": "Ação",
    "FPS": "FPS",
    "RPG": "RPG",
    "MMORPG": "MMORPG",
    "SPORTS": "Esportes",
    "CAR": "Corrida"
  };

  if (!game) {
    return (
      <div className="flex flex-col items-center min-w-2/3 text-lg font-bold bg-emerald-800 p-6 text-white">
        Nenhum jogo selecionado
      </div>
    );
  }

  const categoryDisplayName = categoryDisplayNames[game.category as keyof typeof categoryDisplayNames] || game.category;

  return (
    <div className="flex flex-col w-full text-lg bg-emerald-800 text-white">
      <div className="flex min-h-48 bg-emerald-400 w-full items-center justify-center">
        <p className="items-center justify-center text-emerald-950 font-bold text-2xl">{game.name}</p>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{game.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Detalhes</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Publicadora:</span> {game.publisher}</li>
              <li><span className="font-semibold">Categoria:</span> {categoryDisplayName}</li>
              <li><span className="font-semibold">Tamanho:</span> {game.size} GB</li>
              <li><span className="font-semibold">Lançamento:</span> {formatDate(game.releaseDate)}</li>
            </ul>
          </div>
          
          <div className="bg-emerald-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Descrição</h3>
            <p>{game.description || "Sem descrição disponível."}</p>
          </div>
        </div>
        
        <div className="mt-6 bg-emerald-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Informações Adicionais</h3>
          <p className="text-emerald-300">
            Requisitos mínimos: xxx
          </p>
        </div>
      </div>
    </div>
  );
}