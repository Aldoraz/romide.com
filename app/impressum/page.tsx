export default function Impressum() {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-8 sm:p-12">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Responsible for the Content</h2>
          <p>
            This website is operated as a personal project for non-commercial purposes. 
            The content and services provided here are intended for personal use by individuals who have received explicit permission from the page owner.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Contact Information</h2>
          <p>
            For any questions or concerns regarding this website or its content, please contact:
          </p>
          <p>
            <strong>Pseudonym:</strong> Aldoraz <br />
            <strong>Email:</strong> <a href="mailto:support@romide.com" className="text-blue-600 hover:underline">support@romide.com</a>
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Non-Commercial Project</h2>
          <p>
            This website and the services provided are non-commercial in nature. 
            The purpose is for personal utility and practice, and no business transactions are conducted through this website.
          </p>
        </section>
      </div>
    );
  }
  