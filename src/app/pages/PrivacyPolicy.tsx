import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Introduction</h2>
            <p>
              Solvrex ("we," "us," "our," or "Company") respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and otherwise handle your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and other contact details you provide</li>
              <li><strong>Business Information:</strong> Company name, industry, role, and business needs you share with us</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence you send us</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website (pages visited, time spent, clicks)</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To communicate with you about our services</li>
              <li>To personalize your experience</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure security</li>
              <li>To analyze website usage and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>With your explicit consent</li>
              <li>With service providers who assist us in operating our website or conducting business</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences and analyze website usage. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">7. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any third-party services before providing your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Solvrex</strong></p>
              <p>Email: hello@solvrex.com</p>
              <p>Website: solvrex.com</p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
