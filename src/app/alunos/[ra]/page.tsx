"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useDados } from "@/context/DadosContext";
import { disciplinas } from "@/data/disciplinas";

export default function DetalheAlunoPage() {
    const params = useParams<{ ra: string }>();
    const { alunos, matriculas, carregado } = useDados();

    const ra = Number(params.ra);
    const aluno = alunos.find((a) => a.ra === ra);

    if (!carregado) {
        return <p className="mensagem-info">Carregando...</p>;
    }

    if (!aluno) {
        return (
            <section className="cartao">
                <h2>Aluno não encontrado</h2>
                <p className="mensagem-erro">Não existe aluno cadastrado com o RA {params.ra}.</p>
                <div className="formulario-acoes">
                    <Link href="/alunos" className="link-voltar">
                        ← Voltar para a lista de alunos
                    </Link>
                </div>
            </section>
        );
    }

    const disciplinasDoAluno = matriculas
        .filter((m) => m.student_ra === aluno.ra)
        .map((m) => disciplinas.find((d) => d.id === m.course_id))
        .filter((d) => d !== undefined);

    const partes = aluno.name.trim().split(/\s+/);
    const iniciais = (partes[0][0] + (partes.length > 1 ? partes[partes.length - 1][0] : "")).toUpperCase();

    return (
        <>
            <section className="faixa">
                <div>
                    <h1>Detalhes do aluno</h1>
                    <p>Informações do aluno selecionado.</p>
                </div>
            </section>

            <section className="cartao">
                <div className="detalhe-topo">
                    <span className="avatar avatar-grande">{iniciais}</span>
                    <div>
                        <h2>{aluno.name}</h2>
                        <p>RA {aluno.ra}</p>
                    </div>
                </div>

                <h2>Disciplinas matriculadas ({disciplinasDoAluno.length})</h2>

                {disciplinasDoAluno.length === 0 ? (
                    <p className="mensagem-info">Esse aluno ainda não está matriculado em nenhuma disciplina.</p>
                ) : (
                    <ul className="tags">
                        {disciplinasDoAluno.map((d) => (
                            <li key={d.id} className="tag">
                                {d.name}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="formulario-acoes" style={{ marginTop: 24 }}>
                    <Link href="/alunos" className="link-voltar">
                        ← Voltar para a lista de alunos
                    </Link>
                </div>
            </section>
        </>
    );
}