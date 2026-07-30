import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

/**
 * TimeBucks Prelander
 * 
 * Design Philosophy: "Empowered Opinions"
 * - Purple-accented, women-centric rewards platform
 * - Focus on trust, clarity, and opportunity
 * - FB & FTC compliant (no earnings guarantees, affiliate disclosure)
 * - Clear "See if you qualify" CTA
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleQualify = () => {
    // Redirect to qualification form or next step
    window.location.href = "#qualify";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/timebucks-logo_cef7d56e.png"
              alt="TimeBucks"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">TimeBucks</span>
          </div>
          <Button
            onClick={handleQualify}
            className="bg-purple-600 hover:bg-purple-700 text-white btn-hover"
          >
            See if you qualify
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/manus-storage/timebucks-hero-bg_d2aebe43.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20" />
        <div className={`container relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex justify-center mb-6">
            <div className="accent-divider" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Opinions Are Worth Something
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Join thousands of women sharing their opinions and participating in surveys. Flexible opportunities to earn rewards on your own schedule.
          </p>
          <p className="text-xs text-gray-500 mb-8 italic">
            *Earnings vary based on survey availability and eligibility. See our <Link href="/disclaimer" className="text-purple-600 hover:text-purple-700 underline">disclaimer</Link> for details.
          </p>
          <Button
            onClick={handleQualify}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white btn-hover inline-flex items-center gap-2"
          >
            See if you qualify
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join TimeBucks?
            </h2>
            <p className="text-gray-600 text-lg">
              We value your time and your perspective
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Flexible Opportunities */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Opportunities
              </h3>
              <p className="text-gray-600">
                Participate in surveys and studies at your own pace. Available opportunities vary based on your profile and location.
              </p>
            </div>

            {/* Pillar 2: Flexibility */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your Schedule
              </h3>
              <p className="text-gray-600">
                Work on your own terms. No commitments or quotas—just opportunities that fit your lifestyle.
              </p>
            </div>

            {/* Pillar 3: Community */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your Voice Matters
              </h3>
              <p className="text-gray-600">
                Companies and researchers value your insights. Your opinions directly shape products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Three simple steps to get started
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Complete Your Profile
                </h3>
                <p className="text-gray-600">
                  Answer a few questions about yourself. This helps match you with surveys and opportunities that fit your profile.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  See If You Qualify
                </h3>
                <p className="text-gray-600">
                  We'll check if you're eligible for our platform. It's quick, easy, and there's no obligation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Start Participating
                </h3>
                <p className="text-gray-600">
                  Once approved, browse available opportunities and participate in surveys and studies that match your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Women Everywhere
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join a growing community of women who are participating in surveys on their own terms. Your data is secure, your privacy is protected, and your opinions are valued.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>No Spam</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center italic">
            Affiliate Disclosure: We earn a commission when you sign up through this site. This does not affect your experience or pricing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="qualify" className="py-16 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            See if you qualify for TimeBucks. It only takes a few minutes, and there's no commitment.
          </p>
          <Button
            onClick={handleQualify}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white btn-hover inline-flex items-center gap-2"
          >
            See if you qualify
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required. Takes less than 5 minutes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/timebucks-logo_cef7d56e.png"
                  alt="TimeBucks"
                  className="w-6 h-6"
                />
                <span className="font-bold text-white">TimeBucks</span>
              </div>
              <p className="text-sm">
                Empowering women to share their opinions and participate in surveys.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition">Disclaimer</Link>
              <span className="text-gray-600">•</span>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
            </div>
            <p className="text-xs text-gray-500 text-center">
              &copy; 2026 TimeBucks Prelander. All rights reserved. | This is a prelanding page for the TimeBucks platform.
            </p>
            <p className="text-xs text-gray-600 text-center mt-3">
              <em>Disclaimer: We are not affiliated with TimeBucks except as a referral partner. See our <Link href="/disclaimer" className="text-gray-400 hover:text-white underline">disclaimer</Link> for important information about earnings and third-party services.</em>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
