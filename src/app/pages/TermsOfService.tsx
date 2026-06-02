import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Solvrex website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service. We reserve the right to update and change these terms at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Solvrex's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Disclaimer</h2>
            <p>
              The materials on Solvrex's website are provided on an 'as is' basis. Solvrex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Limitations</h2>
            <p>
              In no event shall Solvrex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Solvrex's website, even if Solvrex or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Solvrex's website could include technical, typographical, or photographic errors. Solvrex does not warrant that any of the materials on its website are accurate, complete, or current. Solvrex may make changes to the materials contained on its website at any time without notice. Solvrex does not, however, make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Links</h2>
            <p>
              Solvrex has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Solvrex of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">7. Modifications</h2>
            <p>
              Solvrex may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Solvrex operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">9. Services Provided</h2>
            <p>
              Solvrex provides technology consulting, career support, and business solutions services. Our services are provided on a professional basis and are subject to the terms outlined in individual service agreements. Nothing in these Terms of Service should be construed as a guarantee of specific results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">10. User Responsibilities</h2>
            <p>
              You agree to use this website and our services in a responsible and lawful manner. You shall not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Engage in any form of harassment or abuse</li>
              <li>Transmit any unlawful, threatening, or defamatory content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the operation of our website or services</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">11. Intellectual Property</h2>
            <p>
              All content on the Solvrex website, including text, graphics, logos, images, and software, is the property of Solvrex or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution of any materials is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Solvrex shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services or materials on our website, even if Solvrex has been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-8">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
