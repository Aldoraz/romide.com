export default function Impressum() {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-8 sm:p-12">
        <h1 className="text-3xl font-bold mb-6">Impressum / Terms of Service</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Responsible for the Content</h2>
          <p>
            This website and associated services are operated as a personal project for non-commercial purposes. 
            The content, services, and tools provided here are intended solely for personal use by individuals who have received explicit permission from the owner.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Contact Information</h2>
          <p>
            For any questions or concerns regarding this website, services, or content, please contact:
          </p>
          <p>
            <strong>Pseudonym:</strong> Aldoraz <br />
            <strong>Email:</strong> <a href="mailto:support@romide.com" className="text-blue-600 hover:underline">support@romide.com</a>
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Non-Commercial Project with Private Analytics</h2>
          <p>
            This website and the associated services, including hosted game servers and a Discord bot, are non-commercial in nature. Data collected is used solely for private analytics 
             and is not shared or sold. By using these services, you agree to have your data stored and used for these analytics purposes.
          </p>
          <p>
            These services are provided on a discretionary basis, and access may be revoked at any time without prior notice. The operator reserves the right to discontinue any service 
            at any time for any reason, without liability for any resulting damages or losses.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Liability</h2>
          <p>
            By using these services, you acknowledge that the operator holds no liability for any damages, data loss, or other issues arising from the use of or inability to use these services. 
            Users are responsible for ensuring their own compliance with any applicable terms or conditions.
          </p>
        </section>
      </div>
    );
  }
