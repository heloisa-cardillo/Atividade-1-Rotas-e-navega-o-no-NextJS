import { disciplinas } from "@/data/disciplinas";

export default function DisciplinasPage() {
    return (
        <div className="area-disciplinas">
            <section className="faixa">
                <div>
                    <h1>Disciplinas</h1>
                    <p>Catálogo de disciplinas do curso.</p>
                    <span className="contador">{disciplinas.length} disciplinas</span>
                </div>
            </section>

            <section className="grade-disciplinas">
                {disciplinas.map((disciplina) => (
                    <article key={disciplina.id} className="cartao-disciplina">
                        <span className="cartao-disciplina-id">ID {disciplina.id}</span>
                        <h2 className="cartao-disciplina-nome">{disciplina.name}</h2>
                    </article>
                ))}
            </section>
        </div>
    );
}