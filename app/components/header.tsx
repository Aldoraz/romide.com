export default function Header() {
    return (
      <div className="relative p-4 font-[family-name:var(--font-geist-mono)]">
        <a href="/" className="text-2xl font-bold mr-4">Home</a>
        <a href="/dashboard" className="text-2xl font-bold mr-4">Dashboard</a>
        <a href="/portfolio" className="text-2xl font-bold mr-4">Portfolio</a>
        <a href="/projects" className="text-2xl font-bold">Projects</a>
      </div>
    );
  }
  