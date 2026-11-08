"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Início", area: "inicio" },
    { href: "/alunos", label: "Alunos", area: "alunos" },
    { href: "/disciplinas", label: "Disciplinas", area: "disciplinas" },
    { href: "/matriculas", label: "Matrículas", area: "matriculas" },
];

export default function Header() {
    const pathname = usePathname();

    function estaAtivo(href: string) {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    }

    return (
        <header className="header">
            <div className="header-conteudo">
                <Link href="/" className="logo">
                    <span className="logo-marca">PA</span>
                    <span className="logo-texto">Portal Acadêmico</span>
                </Link>

                <nav className="nav" aria-label="Navegação principal">
                    {links.map((link) => {
                        const ativo = estaAtivo(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link nav-${link.area} ${ativo ? "ativo" : ""}`}
                                aria-current={ativo ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}