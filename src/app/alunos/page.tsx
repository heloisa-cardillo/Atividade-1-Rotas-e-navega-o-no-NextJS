"use client";

import Link from "next/link";
import { useDados } from "@/context/DadosContext";

function iniciais(nome: string) {
    const partes = nome.trim().split(/\s+/);
    const primeira = partes[0]?.[0] ?? "";
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
    return (primeira + ultima).toUpperCase();
}

export default function AlunosPage() {
    const { alunos } = useDados();

    return (
        <>
            <section className="faixa">
                <div>
                    <h1>Alunos</h1>
                    <p>Consulte os alunos cadastrados no sistema.</p>
                    <span className="contador">
                        {alunos.length} {alunos.length === 1 ? "aluno cadastrado" : "alunos cadastrados"}
                    </span>
                </div>
                <Link href="/alunos/novo" className="botao">
                    + Cadastrar aluno
                </Link>
            </section>

            {alunos.length === 0 ? (
                <p className="mensagem-info">Nenhum aluno cadastrado.</p>
            ) : (
                <ul className="lista-alunos">
                    {alunos.map((aluno) => (
                        <li key={aluno.ra}>
                            <Link href={`/alunos/${aluno.ra}`} className="lista-alunos-item">
                                <span className="avatar">{iniciais(aluno.name)}</span>
                                <span className="lista-alunos-nome">{aluno.name}</span>
                                <span className="lista-alunos-ra">RA {aluno.ra}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}