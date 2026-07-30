import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-xl font-bold text-gray-900">Contact Us</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-3xl mx-auto py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about TimeBucks or this website? We'd love to hear from you. Please use the contact information below to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For general inquiries and support requests:
            </p>
            <a
              href="mailto:support@timebucks-prelander.com"
              className="text-purple-600 hover:text-purple-700 font-semibold break-all"
            >
              support@timebucks-prelander.com
            </a>
          </div>

          {/* Support */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">Support</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For issues with the TimeBucks platform itself, please contact TimeBucks directly through their support channels.
            </p>
            <a
              href="https://timebucks.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Visit TimeBucks Support →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your message here..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Send Message
            </Button>

            <p className="text-xs text-gray-500 text-center">
              We'll get back to you as soon as possible. Please allow 24-48 hours for a response.
            </p>
          </form>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Is this an official TimeBucks website?
              </h4>
              <p className="text-gray-600 text-sm">
                No, this is a prelanding page that directs you to the TimeBucks platform. We are a referral partner, not affiliated with TimeBucks directly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                How long does qualification take?
              </h4>
              <p className="text-gray-600 text-sm">
                Qualification time varies. After you complete the initial questions, TimeBucks will review your information. Most decisions are made within 24-48 hours.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                What if I don't qualify?
              </h4>
              <p className="text-gray-600 text-sm">
                If you don't qualify, TimeBucks will notify you. You can contact their support team to inquire about the reason or try again in the future.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Is my personal information safe?
              </h4>
              <p className="text-gray-600 text-sm">
                Yes. We take privacy seriously and use industry-standard security measures. Please review our <Link href="/privacy" className="text-purple-600 hover:text-purple-700">Privacy Policy</Link> for details.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-4">
            For more information, please review our legal documents:
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">
              Terms of Service
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/privacy" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/disclaimer" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">
              Disclaimer
            </Link>
          </div>
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
