import { Link } from "wouter";
import PageShell from "@/components/PageShell";

export default function Privacy() {
  return (
    <PageShell title="Privacy Policy">
      <div className="prose prose-sm max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>

        <p className="mb-6 text-sm text-gray-600">
          <strong>Last Updated: July 30, 2026</strong>
        </p>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h3>
          <p className="mb-4">
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h3>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and other information you voluntarily provide</li>
            <li><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referral sources</li>
            <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">3. Use of Your Information</h3>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Process your registration and qualification requests</li>
            <li>Email you regarding your account or order</li>
            <li>Fulfill and send you information related to your qualification</li>
            <li>Generate a personal profile about you so that future visits to the site will be personalized</li>
            <li>Increase the efficiency and operation of the site</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">4. Disclosure of Your Information</h3>
          <p className="mb-4">We may share your information with third parties in the following circumstances:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>With our partner platforms to process your qualification and participation</li>
            <li>When required by law or to protect our legal rights</li>
            <li>With your consent for any other purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">5. Security of Your Information</h3>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">6. Contact Us</h3>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us using the information provided on our{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700">
              contact page
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">7. Changes to This Privacy Policy</h3>
          <p className="mb-4">
            We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
