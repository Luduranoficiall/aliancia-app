export default function Cadastro() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-aliancia-black">
      <h1 className="text-4xl font-bold text-aliancia-blue mb-4">Cadastro</h1>
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <input type="text" placeholder="Nome completo" className="px-4 py-2 rounded bg-gray-800 text-white" required />
        <input type="email" placeholder="E-mail" className="px-4 py-2 rounded bg-gray-800 text-white" required />
        <input type="password" placeholder="Senha" className="px-4 py-2 rounded bg-gray-800 text-white" required />
        <button type="submit" className="px-6 py-2 bg-aliancia-blue text-black rounded-lg font-semibold hover:bg-blue-400 transition">Cadastrar</button>
      </form>
      <a href="/login" className="mt-4 text-aliancia-blue underline">Já tenho conta</a>
    </main>
  );
}