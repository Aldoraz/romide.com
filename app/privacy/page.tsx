export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-6">Data Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                    Your privacy is important to us. This Data Privacy Policy explains
                    what information we collect from you, how we use it, and your rights
                    regarding your data. By using our services, you agree to the
                    collection and use of your data as described in this policy.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
                <p>
                    We collect only the data necessary to provide access to our services, which include hosted game servers, a Discord bot, and cloud tools like Nextcloud. This includes:
                </p>
                <ul className="list-disc list-inside">
                    <li>Username and Discord ID</li>
                    <li>Email Address</li>
                    <li>Password (stored securely using encryption)</li>
                    <li>Game and server usage statistics (for private analytics)</li>
                </ul>
                <p>    
                    Data collected is used solely for two purposes: 
                    1) providing access to the services and 
                    2) private analytics.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                <p>
                    Your data is used solely to provide access to our services and for private analytics. Examples include generating statistics for personal use such as 
                    “most active players” on game servers or “most invites sent” via the Discord bot. We do not sell, share, or use your data for commercial purposes, and it 
                    will only be shared as required by law.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                <p>
                    Your data is stored on secure servers located in Germany, utilizing industry-standard security practices, including:
                </p>
                <ul className="list-disc list-inside">
                    <li>Data redundancy for protection against data loss</li>
                    <li>Power backups for continuous server operation</li>
                    <li>Encryption and secure traffic handling for data security</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p>
                    You have the right to:
                </p>
                <ul className="list-disc list-inside">
                    <li>Request access to the data we hold about you</li>
                    <li>Request correction or deletion of your data (this may result in loss of access to certain services)</li>
                    <li>Withdraw consent for data processing at any time (which may impact your ability to use the services)</li>
                </ul>   
                <p>To exercise your rights, contact us at <a href="mailto:privacy@romide.com" className="text-blue-600 hover:underline">privacy@romide.com</a>.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p>
                    Your data will be retained for as long as you maintain an account. If you request account deletion, all associated data will be permanently removed from our servers.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                <p>
                    This policy is effective as of <strong>October 2024</strong>. Any future changes will be posted here with an updated effective date.
                </p>
            </section>
        </div>
    );
}
