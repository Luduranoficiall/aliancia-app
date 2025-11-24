export default function Beneficios() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-aliancia-black">
      <h1 className="text-4xl font-bold text-aliancia-blue mb-4">Benefícios</h1>
      <ul className="text-lg max-w-xl text-left mb-8 list-disc list-inside">
        <li>Cashback em 3 níveis</li>
        <li>IA pessoal para membros</li>
        <li>Networking presencial e digital</li>
        <li>Marketplace exclusivo</li>
        <li>Simuladores e ferramentas inteligentes</li>
        <li>Painel do membro completo</li>
      </ul>
      <a href="/" className="px-6 py-3 bg-aliancia-blue text-black rounded-lg font-semibold hover:bg-blue-400 transition">Voltar</a>
    </main>
  );
}