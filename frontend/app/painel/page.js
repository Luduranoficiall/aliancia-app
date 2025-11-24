export default function Painel() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-aliancia-black">
      <h1 className="text-4xl font-bold text-aliancia-blue mb-4">Painel do Membro</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        Bem-vindo ao seu painel! Aqui você terá acesso à sua rede, cashback, convites, simuladores, histórico de compras e ao seu agente pessoal de IA.
      </p>
      <a href="/" className="px-6 py-3 bg-aliancia-blue text-black rounded-lg font-semibold hover:bg-blue-400 transition">Voltar</a>
    </main>
  );
}