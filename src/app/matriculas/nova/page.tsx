"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDados } from "@/context/DadosContext";
import { disciplinas } from "@/data/disciplinas";

export default function NovaMatriculaPage() {
    const router = useRouter();
    const { alunos, cadastrarMatricula } = useDados();

    const [ra, setRa] = useState("");
    const [disciplinaId, setDisciplinaId] = useState("");
    const [erro, setErro] = useState("");

    function enviar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setErro("");

        if (!ra) {
            setErro("Selecione um aluno.");
            return;
        }

        if (!disciplinaId) {
            setErro("Selecione uma disciplina.");
            return;
        }

        const resultado = cadastrarMatricula({
            student_ra: Number(ra),
            course_id: Number(disciplinaId),
        });

        if (!resultado.ok) {
            setErro(resultado.erro);
            return;
        }

        router.push("/matriculas");
    }

    return (
        <div className="area-matriculas">
            <section className="faixa">
                <div>
                    <h1>Nova matrícula</h1>
                    <p>Vincule um aluno a uma disciplina.</p>
                </div>
            </section>

            <section className="cartao">
                <form className="formulario" onSubmit={enviar} noValidate>
                    {erro && (
                        <p className="mensagem-erro" role="alert">
                            {erro}
                        </p>
                    )}

                    <div className="campo">
                        <label htmlFor="aluno">Aluno</label>
                        <select id="aluno" value={ra} onChange={(e) => setRa(e.target.value)}>
                            <option value="">Selecione um aluno</option>
                            {alunos.map((aluno) => (
                                <option key={aluno.ra} value={aluno.ra}>
                                    {aluno.name} (RA {aluno.ra})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="disciplina">Disciplina</label>
                        <select id="disciplina" value={disciplinaId} onChange={(e) => setDisciplinaId(e.target.value)}>
                            <option value="">Selecione uma disciplina</option>
                            {disciplinas.map((disciplina) => (
                                <option key={disciplina.id} value={disciplina.id}>
                                    {disciplina.id} · {disciplina.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="formulario-acoes">
                        <button type="submit" className="botao">
                            Cadastrar matrícula
                        </button>
                        <Link href="/matriculas" className="link-voltar">
                            ← Voltar
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
}