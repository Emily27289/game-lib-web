
export default function Sidebar() {
    return (
      <aside className="min-w-1/3 bg-emerald-600 p-6">
        <div className="flex justify-begin">
          <h1 className="w-70 h-144 text-2x1 text-center font-bold">
            <div className="mt-4">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="rounded-lg p-1 w-50  bg-emerald-400 text-emerald-950" 
              />

            <ul className="mt-5 text-left">
              {Array(10).fill("Jogo X").map((jogo, index) => (
                <li key={index} className="text-emerald-950 mt-1">{jogo}</li>
              ))}
            </ul>
              </div>
          </h1>
            
        </div>
      </aside>
    );
  }
  