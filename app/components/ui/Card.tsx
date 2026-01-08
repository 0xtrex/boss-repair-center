export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-6 transition hover:border-blue-500/40">
      {children}
    </div>
  );
}
