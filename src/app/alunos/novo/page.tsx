"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDados } from "@/context/DadosContext";

export default function NovoAlunoPage() {
    const router = useRouter();
    const { cadastrarAluno } = useDados();

    const [ra, setRa] = useState("");
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");

    function enviar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setErro("");

        const raNumero = Number(ra);
        const nomeLimpo = nome.trim().replace(/\s+/g, " ");

        if (!ra.trim() || !Number.isInteger(raNumero) || raNumero <= 0) {
            setErro("Informe um RA válido (somente números).");
            return;
        }

        if (!nomeLimpo) {
            setErro("Informe o nome completo do aluno.");
            return;
        }

        const resultado = cadastrarAluno({ ra: raNumero, name: nomeLimpo });

        if (!resultado.ok) {
            setErro(resultado.erro);
            return;
        }

        router.push("/alunos");
    }

    return (
        <>
            <section className="faixa">
                <div>
                    <h1>Cadastrar aluno</h1>
                    <p>Preencha os dados para incluir um novo aluno.</p>
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
                        <label htmlFor="ra">RA</label>
                        <input
                            id="ra"
                            name="ra"
                            inputMode="numeric"
                            value={ra}
                            onChange={(e) => setRa(e.target.value.replace(/\D/g, ""))}
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="formulario-acoes">
                        <button type="submit" className="botao">
                            Cadastrar
                        </button>
                        <Link href="/alunos" className="link-voltar">
                            ← Voltar
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
}