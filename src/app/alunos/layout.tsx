import AlunosMenu from "@/components/AlunosMenu";

export default function AlunosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="area-alunos alunos-layout">
            <AlunosMenu />
            <div>{children}</div>
        </div>
    );
}