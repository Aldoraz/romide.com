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
                    We collect only the data necessary to create an account on our services, such as:
                </p>
                <ul className="list-disc list-inside">
                    <li>Username</li>
                    <li>Email Address</li>
                    <li>Password (stored securely using encryption)</li>
                </ul>
                <p>
                    Additionally, any extra data you choose to provide (e.g., phone numbers, addresses, etc.)
                    in services like Nextcloud will also be stored on our servers.
                </p>
                <p>We do not track your activity or use any form of analytics.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                <p>
                    Your data is used solely to provide access to our services. We do not
                    sell or share your data with third parties, except where legally required.
                    Specifically, we use your data to:
                </p>
                <ul className="list-disc list-inside">
                    <li>Provide access to password management, cloud storage, and other services.</li>
                    <li>Communicate with you regarding account access and notifications.</li>
                    <li>Send system-generated emails via Brevo (SMTP service).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                <p>
                    Your data is stored on secure servers located in Germany. We implement industry-standard
                    security measures to protect your data, including:
                </p>
                <ul className="list-disc list-inside">
                    <li>RAID 10 for data redundancy and protection.</li>
                    <li>Dual power supply units (PSUs) for server redundancy.</li>
                    <li>Reverse proxies, SSL encryption, and Cloudflare tunnels for secure traffic routing.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p>
                    You have the right to:
                </p>
                <ul className="list-disc list-inside">
                    <li>Request access to the data we hold about you.</li>
                    <li>Request correction or deletion of your data.</li>
                    <li>Withdraw consent for data processing at any time.</li>
                </ul>
                <p>
                    To exercise your rights, please contact us at{' '}
                    <a href="mailto:privacy@romide.com" className="text-blue-600 hover:underline">
                        privacy@romide.com
                    </a>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p>
                    We retain your data for as long as your account exists. If you request to delete
                    your account, all associated data will also be permanently deleted.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                <p>
                    This policy is effective as of <strong>September 2024</strong>. Any future changes
                    will be posted here with an updated effective date.
                </p>
            </section>
        </div>
    );
}
