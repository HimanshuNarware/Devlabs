import React from 'react';
import './TermsOfService.css';

function TermsOfService() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service" className="active">Terms of Service</a>
        </nav>
      </header>

      <main>
        <section className="terms-of-service">
          <h1>Terms of Service</h1>
          <p>Welcome to DevLabs, a website where you can search for free tools that are useful for your daily needs. This application is created by the incredible open-source community. On DevLabs, you can discover a collection of free tools that can assist you in various aspects of your life. Moreover, you have the opportunity to contribute to this project by adding more tools to the database.</p>

          <h4>1. Acceptance of Terms</h4>
          <p>By accessing or using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

          <h4>2. Changes to Terms</h4>
          <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.</p>

          <h4>3. Use of Website</h4>
          <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of or restrict the use of the website by any third party.</p>

          <h4>4. User Contributions</h4>
          <p>You may contribute to our database by adding new tools. However, all contributions must comply with our guidelines and be approved by our team.</p>

          <h4>5. Limitation of Liability</h4>
          <p>DevLabs is not responsible for any damages arising from the use or inability to use our website or any content contained within.</p>

          <h4>6. Governing Law</h4>
          <p>These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which we operate.</p>

          <h4>7. Contact Us</h4>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@devlabsstore.tech">support@devlabsstore.tech</a>.</p>
        </section>
      </main>
    </div>
  );
}

export default TermsOfService;
