import { Button } from "@/components/ui/button";
import { CheckCircle2, ClipboardCheck, Search, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function HowItWorks() {
  return (
    <PageShell title="How It Works">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How tasksrewards Works</h2>
        <p className="text-lg text-gray-600">Three simple steps between you and your first opportunity.</p>
      </div>

      <div className="space-y-8 mb-12">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white">
              <ClipboardCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Answer a Few Questions</h3>
            <p className="text-gray-600">
              Our short quiz takes less than a minute. It helps us understand your availability and what kind of opportunities suit you best — surveys, app testing, games, or a mix of everything.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white">
              <Search className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. We Check Your Eligibility</h3>
            <p className="text-gray-600">
              Availability depends on a few factors, including your location. We'll let you know right away whether you qualify — no waiting around for an email.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Start Sharing Your Opinions</h3>
            <p className="text-gray-600">
              Once you're in, browse available opportunities and get started on your own schedule. No quotas, no commitments — just opportunities that fit your life.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-xl p-8 mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">A Few Things to Know</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Eligibility and available opportunities vary by location.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">You must be at least 18 years old to participate.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">There's no cost to sign up, and no commitment once you're in.</span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Button
          onClick={() => (window.location.href = "/quiz")}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          See If You Qualify
        </Button>
      </div>
    </PageShell>
  );
}
