"use client";

import Link from "next/link";
import { useDados } from "@/context/DadosContext";
import { disciplinas } from "@/data/disciplinas";

export default function MatriculasPage() {
    const { alunos, matriculas } = useDados();

    const linhas = matriculas.map((m) => ({
        chave: `${m.student_ra}-${m.course_id}`,
        ra: m.student_ra,
        aluno: alunos.find((a) => a.ra === m.student_ra)?.name ?? "Aluno não encontrado",
        disciplina: disciplinas.find((d) => d.id === m.course_id)?.name ?? "Disciplina não encontrada",
    }));

    return (
        <div className="area-matriculas">
            <section className="faixa">
                <div>
                    <h1>Matrículas</h1>
                    <p>Vínculos entre alunos e disciplinas.</p>
                    <span className="contador">
                        {matriculas.length} {matriculas.length === 1 ? "matrícula" : "matrículas"}
                    </span>
                </div>
                <Link href="/matriculas/nova" className="botao">
                    + Nova matrícula
                </Link>
            </section>

            {linhas.length === 0 ? (
                <p className="mensagem-info">Nenhuma matrícula cadastrada.</p>
            ) : (
                <div className="tabela-container">
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th>RA</th>
                                <th>Aluno</th>
                                <th>Disciplina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {linhas.map((linha) => (
                                <tr key={linha.chave}>
                                    <td className="tabela-ra">{linha.ra}</td>
                                    <td>{linha.aluno}</td>
                                    <td>{linha.disciplina}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}