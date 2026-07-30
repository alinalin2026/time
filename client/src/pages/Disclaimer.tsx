import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function Disclaimer() {
  return (
    <PageShell title="Disclaimer">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8 flex gap-4">
        <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-purple-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-purple-800">
            Please read this disclaimer carefully before using this website and participating in our partner platforms.
          </p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer</h2>

        <p className="mb-6 text-sm text-gray-600">
          <strong>Last Updated: July 30, 2026</strong>
        </p>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">1. No Earnings Guarantee</h3>
          <p className="mb-4">
            <strong>This is not a guarantee of earnings.</strong> Participation in our partner platforms does not guarantee any specific income, earnings, or financial results. Your ability to earn depends on many factors including, but not limited to: the number and quality of opportunities available to you, your eligibility, the time you invest, and your location.
          </p>
          <p className="mb-4">
            Actual earnings may vary significantly and could be zero. We make no representations or warranties regarding potential earnings.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">2. Affiliate Disclosure (FTC Compliance)</h3>
          <p className="mb-4">
            <strong>This website may contain affiliate links.</strong> We may earn a commission when you click on links to third-party websites or sign up for services through this website. This does not affect the price you pay. We only recommend products and services we believe in.
          </p>
          <p className="mb-4">
            As an affiliate, we are required by the Federal Trade Commission (FTC) to disclose that we have a material connection with the companies whose products or services are featured on this website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">3. Third-Party Services</h3>
          <p className="mb-4">
            This website is a prelanding page that directs you to partner platforms. Those platforms are third-party services, and we are not responsible for their operations, policies, or practices. Please review each partner's own Terms of Service and Privacy Policy before participating.
          </p>
          <p className="mb-4">We are not affiliated with, endorsed by, or sponsored by our partner platforms, except as a referral partner.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">4. No Professional Advice</h3>
          <p className="mb-4">
            The information provided on this website is for informational purposes only and should not be construed as professional financial, legal, or business advice. Before making any decisions, consult with a qualified professional.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">5. Age Requirement</h3>
          <p className="mb-4">
            You must be at least 18 years old to participate in our partner platforms. By accessing this website and proceeding with qualification, you represent that you are at least 18 years old.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">6. Geographic Restrictions</h3>
          <p className="mb-4">
            Our partner platforms are available in select countries. Availability may vary based on your location. We are not responsible for determining your eligibility based on geographic location. Eligibility is verified during the qualification process.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">7. No Warranties</h3>
          <p className="mb-4">
            This website and all information contained herein are provided on an "AS IS" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">8. Limitation of Liability</h3>
          <p className="mb-4">
            In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">9. Changes to Disclaimer</h3>
          <p className="mb-4">
            We reserve the right to update this disclaimer at any time without notice. Your continued use of this website constitutes your acceptance of any changes to this disclaimer.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">10. Contact for Questions</h3>
          <p className="mb-4">
            If you have questions about this disclaimer, please contact us using the information on our{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
