import type { ReactNode } from "react";
import "../styles/globals.css";
import ServiceWorkerRegister from "./service-worker-register";

export const metadata = {
  title: "ALIANCI.A Superapp",
  description: "Painel premium MI.A"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
