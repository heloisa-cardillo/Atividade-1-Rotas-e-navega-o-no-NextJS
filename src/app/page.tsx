import Link from "next/link";

const areas = [
  {
    href: "/alunos",
    classe: "area-alunos",
    titulo: "Alunos",
    descricao: "Consulte os alunos cadastrados, veja os detalhes pelo RA e cadastre novos alunos.",
  },
  {
    href: "/disciplinas",
    classe: "area-disciplinas",
    titulo: "Disciplinas",
    descricao: "Navegue pelo catálogo completo de disciplinas do curso.",
  },
  {
    href: "/matriculas",
    classe: "area-matriculas",
    titulo: "Matrículas",
    descricao: "Veja quem está matriculado em cada disciplina e registre novas matrículas.",
  },
];

export default function Home() {
  return (
    <>
      <section className="inicio-hero">
        <h1>Portal Acadêmico</h1>
        <p>
          Sistema para consultar e cadastrar alunos e matrículas, além de consultar as
          disciplinas do curso, tudo em um só lugar.
        </p>
      </section>

      <section className="inicio-cards">
        {areas.map((area) => (
          <Link key={area.href} href={area.href} className={`inicio-card ${area.classe}`}>
            <h2>{area.titulo}</h2>
            <p>{area.descricao}</p>
            <span>Acessar →</span>
          </Link>
        ))}
      </section>
    </>
  );
}