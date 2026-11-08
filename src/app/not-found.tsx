import Link from "next/link";

export default function NotFound() {
    return (
        <section className="nao-encontrado">
            <p className="nao-encontrado-codigo">404</p>
            <h1>Página não encontrada</h1>
            <p>O endereço que você tentou acessar não existe ou foi digitado errado.</p>
            <Link href="/" className="botao">
                Voltar ao início
            </Link>
        </section>
    );
}