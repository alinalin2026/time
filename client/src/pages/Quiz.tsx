import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Globe } from "lucide-react";
import { TIER1_OFFER_URL, VPN_OFFER_URL, withSubid } from "@/lib/tracking";

/**
 * Quiz Design Philosophy:
 * - One question per screen (mobile-first, higher completion)
 * - Single-tap answers (no friction)
 * - Progress bar to show advancement
 * - "Theater of check" loading spinner before result (builds trust)
 * - Final CTA redirects to signup/main platform
 */

// Tier 1 geos get the real offer; everyone else gets routed to the VPN offer instead.
const TIER1_COUNTRIES = new Set(["US", "GB", "CA", "AU", "DE"]);

type QuizStep = "q1" | "q2" | "q3" | "q4" | "loading" | "result" | "not_available";

interface QuizAnswers {
  q1: string | null; // "yes" | "not_now"
  q2: string | null; // "less_30" | "30_60" | "1_2_hrs" | "more_2_hrs"
  q3: string | null; // "surveys" | "apps" | "games" | "mix"
  q4: string | null; // "agree" | "neutral" | "disagree"
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>("q1");
  const [answers, setAnswers] = useState<QuizAnswers>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  });

  const handleAnswer = (questionKey: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: value }));

    // Simulate progression with slight delay for UX
    setTimeout(() => {
      if (questionKey === "q1") setCurrentStep("q2");
      else if (questionKey === "q2") setCurrentStep("q3");
      else if (questionKey === "q3") setCurrentStep("q4");
      else if (questionKey === "q4") {
        // Trigger loading state before result, then route by geo
        setCurrentStep("loading");

        const geoLookup = fetch("/api/geo")
          .then((r) => r.json())
          .then((data: { country: string | null }) => data.country)
          .catch(() => null);
        const minDelay = new Promise((resolve) => setTimeout(resolve, 2000));

        Promise.all([geoLookup, minDelay]).then(([country]) => {
          const isTier1 = !!country && TIER1_COUNTRIES.has(country.toUpperCase());
          fetch("/api/track", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ outcome: isTier1 ? "qualified" : "not_qualified" }),
          }).catch(() => {});
          setCurrentStep(isTier1 ? "result" : "not_available");
        });
      }
    }, 300);
  };

  const handleClaimSpot = () => {
    // Tier 1 geo - send to the real offer, tagged with the traffic source
    window.location.href = withSubid(TIER1_OFFER_URL);
  };

  const handleTryVpn = () => {
    // Non-tier-1 geo - send to the VPN offer instead, tagged the same way
    window.location.href = withSubid(VPN_OFFER_URL);
  };

  const progressPercentage =
    currentStep === "q1"
      ? 25
      : currentStep === "q2"
        ? 50
        : currentStep === "q3"
          ? 75
          : currentStep === "q4" ||
              currentStep === "loading" ||
              currentStep === "result" ||
              currentStep === "not_available"
            ? 100
            : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 py-8">
      {/* Container */}
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <span className="text-xl font-bold text-gray-900">tasksrewards</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            See If You Qualify
          </h1>
          <p className="text-gray-600">
            Just a few quick questions to get started
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {currentStep === "loading" || currentStep === "result" || currentStep === "not_available"
              ? "Checking eligibility..."
              : `Question ${
                  currentStep === "q1"
                    ? 1
                    : currentStep === "q2"
                      ? 2
                      : currentStep === "q3"
                        ? 3
                        : 4
                } of 4`}
          </p>
        </div>

        {/* Question 1: Are you looking to earn? */}
        {currentStep === "q1" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Are you currently looking for ways to earn extra money online?
            </h2>
            <div className="space-y-3">
              <Button
                onClick={() => handleAnswer("q1", "yes")}
                className="w-full h-14 text-base font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                Yes, absolutely
              </Button>
              <Button
                onClick={() => handleAnswer("q1", "not_now")}
                variant="outline"
                className="w-full h-14 text-base font-medium border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Not right now
              </Button>
            </div>
          </div>
        )}

        {/* Question 2: Free time per day */}
        {currentStep === "q2" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              How much free time do you have per day?
            </h2>
            <div className="space-y-3">
              {[
                { value: "less_30", label: "Less than 30 min" },
                { value: "30_60", label: "30-60 minutes" },
                { value: "1_2_hrs", label: "1-2 hours" },
                { value: "more_2_hrs", label: "More than 2 hours" },
              ].map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleAnswer("q2", option.value)}
                  variant="outline"
                  className="w-full h-14 text-base font-medium border-gray-300 text-gray-900 hover:bg-purple-50 hover:border-purple-300 rounded-lg transition-all"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Question 3: What appeals to you? */}
        {currentStep === "q3" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              What sounds most appealing to you?
            </h2>
            <div className="space-y-3">
              {[
                { value: "surveys", label: "Taking surveys" },
                { value: "apps", label: "Testing apps & websites" },
                { value: "games", label: "Playing games" },
                { value: "mix", label: "A mix of everything" },
              ].map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleAnswer("q3", option.value)}
                  variant="outline"
                  className="w-full h-14 text-base font-medium border-gray-300 text-gray-900 hover:bg-purple-50 hover:border-purple-300 rounded-lg transition-all"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Question 4: Additional question */}
        {currentStep === "q4" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Are you interested in sharing your opinions on products and services?
            </h2>
            <div className="space-y-3">
              {[
                { value: "agree", label: "Yes, I'd love to" },
                { value: "neutral", label: "Maybe, depends on the topic" },
                { value: "disagree", label: "Not particularly" },
              ].map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleAnswer("q4", option.value)}
                  variant="outline"
                  className="w-full h-14 text-base font-medium border-gray-300 text-gray-900 hover:bg-purple-50 hover:border-purple-300 rounded-lg transition-all"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {currentStep === "loading" && (
          <div className="animate-in fade-in duration-300 text-center">
            <div className="flex justify-center mb-6">
              <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Checking your eligibility...
            </h2>
            <p className="text-gray-600 mt-2">This only takes a moment</p>
          </div>
        )}

        {/* Result / Eligibility Screen */}
        {currentStep === "result" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ✅ You Qualify!
            </h2>
            <p className="text-gray-600 mb-8">
              Great news! tasksrewards is accepting new members in your area.
              You're eligible to start earning rewards today.
            </p>

            {/* Verification Threshold Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 mb-8 text-white shadow-lg border border-purple-500">
              <div className="mb-3">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  🔐 VERIFICATION REQUIRED
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Earn $5 to Unlock Full Access
              </h3>
              <p className="text-purple-100 mb-4 text-sm">
                To ensure a safe community and prevent fraud, complete just $5 in tasks within your first 48 hours. Once verified, you'll unlock all platform features and perks.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                48-hour verification window
              </div>
            </div>

            <Button
              onClick={handleClaimSpot}
              className="w-full h-14 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all mb-4 shadow-md"
            >
              Get Started →
            </Button>

            <p className="text-xs text-gray-500">
              No credit card required. Takes less than 5 minutes.
            </p>
          </div>
        )}

        {/* Not Available Screen (non-Tier-1 geo) */}
        {currentStep === "not_available" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 text-center">
            <div className="flex justify-center mb-6">
              <Globe className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sorry, We're Not Available In Your Country
            </h2>
            <p className="text-gray-600 mb-8">
              tasksrewards is currently only open to members in a handful of countries, and we couldn't verify eligibility from your location.
            </p>

            {/* VPN Offer Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 mb-8 text-white shadow-lg border border-purple-500">
              <div className="mb-3">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  🌍 UNLOCK ACCESS
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Have You Tried NordVPN?</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Thousands of members securely connect from a supported region using a trusted VPN. NordVPN is fast, reliable, and takes less than a minute to set up.
              </p>
            </div>

            <Button
              onClick={handleTryVpn}
              className="w-full h-14 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all mb-4 shadow-md"
            >
              Get NordVPN →
            </Button>

            <p className="text-xs text-gray-500">
              Try again once you're connected.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-gray-500">
        <p>tasksrewards™ | Empowering women to earn rewards by sharing opinions</p>
      </div>
    </div>
  );
}
