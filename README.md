# Portal Acadêmico

Atividade 1 – Rotas e navegação no Next.js
Laboratório de Desenvolvimento Web · FATEC Jacareí

Aplicação web para consultar e cadastrar alunos e matrículas, e consultar o catálogo de disciplinas do curso.

<details>
<summary><strong>Funcionalidades</strong></summary>

<br>

**Alunos** (azul · menu lateral e lista)
- Listagem com nome, RA e total de alunos
- Detalhes do aluno pelo RA, com as disciplinas em que ele está matriculado
- Mensagem e link de volta quando o RA não existe
- Cadastro com RA e nome completo, sem permitir RA repetido

**Disciplinas** (verde · cartões)
- Catálogo das 39 disciplinas com ID e nome
- Total calculado a partir dos dados
- Somente consulta

**Matrículas** (laranja · tabela)
- Tabela com RA, nome do aluno e nome da disciplina, buscados nas coleções pelos identificadores
- Total de matrículas e mensagem quando a lista está vazia
- Cadastro com seleção de aluno e disciplina
- Bloqueio de matrícula repetida para o mesmo aluno na mesma disciplina

**Geral**
- Menu em todas as páginas com destaque da área ativa
- Layout raiz com cabeçalho, menu e rodapé, e layout próprio para a área de alunos
- Página de endereço não encontrado com link para o início

</details>

<details>
<summary><strong>Tecnologias</strong></summary>

<br>

- Next.js com App Router
- React
- TypeScript
- Context API para compartilhar alunos e matrículas entre as páginas
- localStorage para manter os cadastros no navegador
- CSS puro com fonte Plus Jakarta Sans

A aplicação não usa banco de dados, API nem autenticação. Os dados iniciais vêm dos arquivos em `src/data/` e os novos cadastros ficam salvos no navegador.

</details>

<details>
<summary><strong>Como rodar</strong></summary>

<br>

```powershell
git clone https://github.com/heloisa-cardillo/Atividade-1-Rotas-e-navega-o-no-NextJS.git
cd Atividade-1-Rotas-e-navega-o-no-NextJS
npm install
npm run dev
```

Depois abra `http://localhost:3000` no navegador.

</details>

<details>
<summary><strong>Rotas</strong></summary>

<br>

| Rota | Página |
| --- | --- |
| `/` | Início |
| `/alunos` | Lista de alunos |
| `/alunos/[ra]` | Detalhes do aluno |
| `/alunos/novo` | Cadastro de aluno |
| `/disciplinas` | Catálogo de disciplinas |
| `/matriculas` | Lista de matrículas |
| `/matriculas/nova` | Cadastro de matrícula |

</details>

<details>
<summary><strong>Estrutura de pastas</strong></summary>

<br>

```
Atividade-1-Rotas-e-navega-o-no-NextJS/
├── public/
├── src/
│   ├── app/
│   │   ├── alunos/
│   │   │   ├── [ra]/
│   │   │   │   └── page.tsx
│   │   │   ├── novo/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── disciplinas/
│   │   │   └── page.tsx
│   │   ├── matriculas/
│   │   │   ├── nova/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AlunosMenu.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── context/
│   │   └── DadosContext.tsx
│   └── data/
│       ├── alunos.tsx
│       ├── disciplinas.ts
│       └── matriculas.ts
├── package.json
└── README.md
```

</details>

## Demonstração
![Demonstração](<public/demostração desen. web.gif>)
