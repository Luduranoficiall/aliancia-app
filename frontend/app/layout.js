import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ALIANCI.A',
  description: 'Ecossistema oficial ALIANCI.A — cashback, IA, networking e marketplace.',
  openGraph: {
    title: 'ALIANCI.A',
    description: 'Ecossistema oficial ALIANCI.A — cashback, IA, networking e marketplace.',
    type: 'website',
    url: 'https://aliancia.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALIANCI.A',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-aliancia-black text-white min-h-screen">
        <nav className="flex justify-center gap-6 py-6">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/beneficios">Benefícios</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/painel">Painel</Link>
          <Link href="/login">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
