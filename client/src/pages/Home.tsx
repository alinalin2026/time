import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

/**
 * tasksrewards Prelander
 * 
 * Design Philosophy: "Empowered Opinions"
 * - Purple-accented, women-centric rewards platform
 * - Focus on trust, clarity, and opportunity
 * - No earnings claims (FB-compliant)
 * - Clear \"See if you qualify\" CTA
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleQualify = () => {
    window.location.href = "/quiz";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="text-xl font-bold text-gray-900">tasksrewards</span>
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
      <section className="py-16 md:py-24 bg-white">
        <div
          className={`container max-w-3xl mx-auto text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex justify-center mb-6">
            <div className="accent-divider" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Opinions Are Worth Something
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of women earning flexible rewards by sharing your thoughts and opinions. No experience needed—just your honest perspective.
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
        <div className="container max-w-5xl mx-auto">
          <img
            src="/images/timebucks-hero.jpg"
            alt="Woman reviewing rewards on her phone"
            className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[16/9]"
          />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join tasksrewards?
            </h2>
            <p className="text-gray-600 text-lg">
              We value your time and your perspective
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Rewards */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Complete surveys, share opinions, and participate in studies. Earn rewards for each contribution.
              </p>
            </div>

            {/* Pillar 2: Flexibility */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Work Your Way
              </h3>
              <p className="text-gray-600">
                Participate on your schedule. No commitments, no quotas—just opportunities that fit your life.
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
                  Answer a Few Questions
                </h3>
                <p className="text-gray-600">
                  Tell us about yourself and what you're interested in. This helps us match you with opportunities that fit.
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
                  Start Earning
                </h3>
                <p className="text-gray-600">
                  Once approved, browse available opportunities and start earning rewards by sharing your opinions.
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
            Join a growing community of women who are earning rewards on their own terms. Your data is secure, your privacy is protected, and your opinions are valued.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="qualify" className="py-16 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            See if you qualify for tasksrewards. It only takes a few minutes, and there's no commitment.
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
                <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="font-bold text-white">tasksrewards</span>
              </div>
              <p className="text-sm">
                Empowering women to earn rewards by sharing their opinions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/opportunities" className="hover:text-white transition">Opportunities</Link></li>
                <li><Link href="/rewards" className="hover:text-white transition">Rewards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2026 tasksrewards. All rights reserved. | Women-focused rewards platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
