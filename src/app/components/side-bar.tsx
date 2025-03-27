
export default function Sidebar() {
    return (
      <aside className="w-60 bg-green-700 p-4 min-h-screen">
        <input
          type="text"
          placeholder="🔍 Buscar"
          className="w-full p-2 rounded bg-green-600 text-white"
        />
        <ul className="mt-4">
          {Array(10).fill("Jogo X").map((jogo, index) => (
            <li key={index} className="text-white mt-2">{jogo}</li>
          ))}
        </ul>
      </aside>
    );
  }
  