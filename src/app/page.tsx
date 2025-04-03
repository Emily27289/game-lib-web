
import Link from "next/link";
import { ArrowRight, BookOpen, Gamepad2, Award, ListChecks } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 text-white">
      {/* Hero Section */}
      <header className="w-full py-8 px-4 md:px-12 flex flex-col items-center text-center">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200">
            Games Library
          </h1>
          <p className="text-emerald-300 text-lg md:text-xl">Sua biblioteca de jogos em um só lugar</p>
        </div>
        
        <div className="w-full max-w-3xl h-64 relative mb-8 rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 backdrop-blur-sm z-10 flex items-center justify-center">
            <Gamepad2 size={120} className="text-white/80" />
          </div>
          <div className="absolute inset-0 bg-emerald-950/30 z-0"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">O que você pode fazer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-600/20">
              <div className="bg-emerald-700/50 p-3 rounded-full w-fit mb-4">
                <ListChecks size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Catalogar</h3>
              <p className="text-emerald-200">Mantenha todos os seus jogos organizados e fáceis de encontrar.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-600/20">
              <div className="bg-emerald-700/50 p-3 rounded-full w-fit mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Descobrir</h3>
              <p className="text-emerald-200">Explore novos jogos baseados em suas preferências e coleção atual.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-600/20">
              <div className="bg-emerald-700/50 p-3 rounded-full w-fit mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Compartilhar</h3>
              <p className="text-emerald-200">Mostre sua coleção e recomende títulos para outros jogadores.</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Comece agora mesmo</h2>
          <p className="text-emerald-200 mb-8 max-w-2xl mx-auto">
            Adicione seus primeiros jogos à biblioteca e tenha acesso a estatísticas, 
            recomendações e muito mais.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/library" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
              Ver biblioteca <ArrowRight size={16} />
            </Link>
            <Link href="/publish/game" className="bg-transparent border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
              Adicionar jogos
            </Link>
          </div>
        </section>
        
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-emerald-800/30 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-emerald-300">250+</p>
            <p className="text-sm text-emerald-200">Jogos Cadastrados</p>
          </div>
          <div className="bg-emerald-800/30 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-emerald-300">6</p>
            <p className="text-sm text-emerald-200">Categorias</p>
          </div>
          <div className="bg-emerald-800/30 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-emerald-300">24/7</p>
            <p className="text-sm text-emerald-200">Disponibilidade</p>
          </div>
          <div className="bg-emerald-800/30 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-emerald-300">100%</p>
            <p className="text-sm text-emerald-200">Gratuito</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 bg-emerald-950/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-emerald-300 font-bold text-lg">Games Lib</p>
            <p className="text-emerald-400 text-sm">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
          
          <div className="flex gap-6">
            <Link href="/library" className="text-emerald-300 hover:text-emerald-100 transition-colors">
              Biblioteca
            </Link>
            <Link href="/publish/game" className="text-emerald-300 hover:text-emerald-100 transition-colors">
              Adicionar Jogos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}