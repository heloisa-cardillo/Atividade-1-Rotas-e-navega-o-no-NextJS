import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DadosProvider } from "@/context/DadosContext";
import "./globals.css";

const fonte = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portal Acadêmico",
  description: "Consulta e cadastro de alunos, disciplinas e matrículas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={fonte.className}>
        <DadosProvider>
          <Header />
          <main className="principal">{children}</main>
          <Footer />
        </DadosProvider>
      </body>
    </html>
  );
}