export default function Dashboard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-center font-[family-name:var(--font-geist-mono)]">App Dashboard</h1>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li><a href="https://bitwarden.romide.com" className="hover:underline">Bitwarden - Password Manager</a></li>
          <li><a href="https://nextcloud.romide.com" className="hover:underline">Nextcloud - Cloud Storage</a></li>
          <li><a href="https://amp.romide.com" className="hover:underline">AMP - Application Management Panel</a></li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="/tos" className="text-sm text-blue-600 hover:underline">
          Terms of Service
        </a>
        <a href="/privacy" className="text-sm text-blue-600 hover:underline">
          Data Privacy Policy
        </a>
      </footer>
    </div>
  );
}


