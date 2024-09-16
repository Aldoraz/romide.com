export default function Header() {
    return (
        <div className="absolute top-0 left-0 p-4 font-[family-name:var(--font-geist-mono)]">
            <a href="/" className="text-2xl font-bold">Home  </a>
            <a href="/dashboard" className="text-2xl font-bold">Dashboard  </a>
            <a href="/portfolio" className="text-2xl font-bold">Portfolio  </a>
        </div>
    );
}