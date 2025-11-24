export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-aliancia-black">
      <h1 className="text-5xl font-bold text-aliancia-blue mb-4">ALIANCI.A</h1>
      <p className="text-xl text-center max-w-xl mb-8">
        Ecossistema oficial: cashback, IA, networking, marketplace e painel do membro. <br />
        <span className="text-aliancia-blue">Bem-vindo à revolução colaborativa!</span>
      </p>
      <a href="/sobre" className="px-6 py-3 bg-aliancia-blue text-black rounded-lg font-semibold hover:bg-blue-400 transition">Saiba mais</a>
    </main>
  );
}
