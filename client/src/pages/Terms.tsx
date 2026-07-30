import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-purple-100">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-3xl mx-auto py-12">
        <div className="prose prose-sm max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          
          <p className="mb-6 text-sm text-gray-600">
            <strong>Last Updated: July 30, 2026</strong>
          </p>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
            <p className="mb-4">
              By accessing and using this website (timebucks-prelander.manus.space), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Use License</h3>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Disclaimer</h3>
            <p className="mb-4">
              The materials on this website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Limitations</h3>
            <p className="mb-4">
              In no event shall TimeBucks or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">5. Accuracy of Materials</h3>
            <p className="mb-4">
              The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. We may make changes to the materials contained on this website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">6. Links</h3>
            <p className="mb-4">
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">7. Modifications</h3>
            <p className="mb-4">
              We may revise these terms of service for this website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">8. Governing Law</h3>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which this website operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">9. Contact Information</h3>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at <Link href="/contact" className="text-purple-600 hover:text-purple-700">contact page</Link> or email us directly.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
