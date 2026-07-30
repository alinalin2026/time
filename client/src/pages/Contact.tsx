import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, MessageSquare } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function Contact() {
  return (
    <PageShell title="Contact Us">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have questions about tasksrewards or this website? We'd love to hear from you. Please use the contact information below to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">Email</h3>
          </div>
          <p className="text-gray-600 mb-4">For general inquiries and support requests:</p>
          <a href="mailto:support@tasksrewards.com" className="text-purple-600 hover:text-purple-700 font-semibold break-all">
            support@tasksrewards.com
          </a>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">Support</h3>
          </div>
          <p className="text-gray-600 mb-4">
            For issues with your account once you've qualified, please contact our partner platform directly through their support channels.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your message here..."
            />
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Send Message
          </Button>

          <p className="text-xs text-gray-500 text-center">We'll get back to you as soon as possible. Please allow 24-48 hours for a response.</p>
        </form>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">How long does qualification take?</h4>
            <p className="text-gray-600 text-sm">
              Qualification time varies. After you complete the quick questions, we'll check your eligibility right away. If approved, you can get started immediately.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What if I don't qualify?</h4>
            <p className="text-gray-600 text-sm">
              Availability depends on your location and a few other factors. If you don't currently qualify, check back in the future — eligibility can change.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Is my personal information safe?</h4>
            <p className="text-gray-600 text-sm">
              Yes. We take privacy seriously and use industry-standard security measures. Please review our{" "}
              <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <p className="text-sm text-gray-600 mb-4">For more information, please review our legal documents:</p>
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
    </PageShell>
  );
}
