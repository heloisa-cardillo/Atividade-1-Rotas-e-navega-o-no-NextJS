"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { alunos as alunosIniciais, Aluno } from "@/data/alunos";
import { matriculas as matriculasIniciais, Matricula } from "@/data/matriculas";
import { disciplinas } from "@/data/disciplinas";

type Resultado = { ok: true } | { ok: false; erro: string };

type DadosContextType = {
    alunos: Aluno[];
    matriculas: Matricula[];
    carregado: boolean;
    cadastrarAluno: (aluno: Aluno) => Resultado;
    cadastrarMatricula: (matricula: Matricula) => Resultado;
};

const CHAVE_ALUNOS = "atividade1:alunos";
const CHAVE_MATRICULAS = "atividade1:matriculas";

const DadosContext = createContext<DadosContextType | null>(null);

function ler<T>(chave: string, padrao: T): T {
    try {
        const valor = localStorage.getItem(chave);
        return valor ? (JSON.parse(valor) as T) : padrao;
    } catch {
        return padrao;
    }
}

function salvar(chave: string, valor: unknown): boolean {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
        return true;
    } catch {
        return false;
    }
}

export function DadosProvider({ children }: { children: ReactNode }) {
    const [alunos, setAlunos] = useState<Aluno[]>(alunosIniciais);
    const [matriculas, setMatriculas] = useState<Matricula[]>(matriculasIniciais);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setAlunos(ler(CHAVE_ALUNOS, alunosIniciais));
        setMatriculas(ler(CHAVE_MATRICULAS, matriculasIniciais));
        setCarregado(true);
    }, []);

    function cadastrarAluno(aluno: Aluno): Resultado {
        if (alunos.some((a) => a.ra === aluno.ra)) {
            return { ok: false, erro: "Já existe um aluno cadastrado com esse RA." };
        }

        const novos = [...alunos, aluno];

        if (!salvar(CHAVE_ALUNOS, novos)) {
            return { ok: false, erro: "Não foi possível salvar o cadastro no navegador. Tente novamente." };
        }

        setAlunos(novos);
        return { ok: true };
    }

    function cadastrarMatricula(matricula: Matricula): Resultado {
        if (!alunos.some((a) => a.ra === matricula.student_ra)) {
            return { ok: false, erro: "Aluno não encontrado." };
        }

        if (!disciplinas.some((d) => d.id === matricula.course_id)) {
            return { ok: false, erro: "Disciplina não encontrada." };
        }

        const duplicada = matriculas.some(
            (m) => m.student_ra === matricula.student_ra && m.course_id === matricula.course_id
        );

        if (duplicada) {
            return { ok: false, erro: "Esse aluno já está matriculado nessa disciplina." };
        }

        const novas = [...matriculas, matricula];

        if (!salvar(CHAVE_MATRICULAS, novas)) {
            return { ok: false, erro: "Não foi possível salvar a matrícula no navegador. Tente novamente." };
        }

        setMatriculas(novas);
        return { ok: true };
    }

    return (
        <DadosContext.Provider value={{ alunos, matriculas, carregado, cadastrarAluno, cadastrarMatricula }}>
            {children}
        </DadosContext.Provider>
    );
}

export function useDados() {
    const contexto = useContext(DadosContext);
    if (!contexto) {
        throw new Error("useDados precisa estar dentro de DadosProvider");
    }
    return contexto;
}