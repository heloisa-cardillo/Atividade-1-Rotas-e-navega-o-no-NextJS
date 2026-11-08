"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AlunosMenu() {
    const pathname = usePathname();
    const cadastroAtivo = pathname === "/alunos/novo";

    return (
        <aside className="menu-lateral" aria-label="Menu de alunos">
            <p className="menu-lateral-titulo">Alunos</p>
            <Link
                href="/alunos"
                className={`menu-lateral-link ${!cadastroAtivo ? "ativo" : ""}`}
                aria-current={pathname === "/alunos" ? "page" : undefined}
            >
                Consultar alunos
            </Link>
            <Link
                href="/alunos/novo"
                className={`menu-lateral-link ${cadastroAtivo ? "ativo" : ""}`}
                aria-current={cadastroAtivo ? "page" : undefined}
            >
                Cadastrar aluno
            </Link>
        </aside>
    );
}