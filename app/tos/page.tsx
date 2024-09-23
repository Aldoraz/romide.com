export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          These Terms of Service (&quot;ToS&quot;) govern your use of the services provided by this website. 
          The service is intended for individuals who have received explicit permission from the page owner. 
          By using the service, you agree to these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the security of your account, including selecting a strong password and not sharing your credentials. 
          Any actions taken under your account are your responsibility. 
          If you suspect any unauthorized activity, please contact us at{' '}
          <a href="mailto:support@romide.com" className="text-blue-600 hover:underline">support@romide.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Loss and Service Downtime</h2>
        <p>
          This service is not a professional product, but a personal project provided &quot;as-is&quot; for utility and practice. 
          While we strive to maintain the highest standards, we cannot guarantee the service&apos;s availability or the integrity of your data. 
          By using the service, you acknowledge and accept the risk of potential data loss or service interruptions. 
          We are not liable for any damages resulting from service outages, data corruption, or loss.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
        <p>
          You agree not to engage in any activities that may violate applicable laws, regulations, or rights of third parties. 
          Any illegal activities, abuse, or actions that could get the page owner into legal trouble are strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Modification of Services</h2>
        <p>
          This service is provided for personal use, and its features or functionality may change over time. 
          We reserve the right to modify or discontinue any aspect of the service without notice. 
          While we will make an effort to inform users about planned outages or shutdowns, we cannot guarantee prior notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
        <p>
          If you have any questions or concerns regarding these Terms of Service, 
          please contact us at{' '}
          <a href="mailto:support@romide.com" className="text-blue-600 hover:underline">support@romide.com</a>.
        </p>
      </section>
    </div>
  );
}
