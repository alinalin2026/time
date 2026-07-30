import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Users } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function About() {
  return (
    <PageShell title="About">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About tasksrewards</h2>
        <p className="text-lg text-gray-600">
          We believe your time and your opinions are worth something. tasksrewards connects women with flexible, opinion-based earning opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4 mx-auto">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Empowering Women</h3>
          <p className="text-gray-600 text-sm">Built around flexibility and choice, for anyone balancing work, family, and everything in between.</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4 mx-auto">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Trust & Privacy</h3>
          <p className="text-gray-600 text-sm">Your data is handled carefully and never sold. See our Privacy Policy for the full picture.</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4 mx-auto">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">A Growing Community</h3>
          <p className="text-gray-600 text-sm">We connect members with opportunities from trusted partner platforms around the world.</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none text-gray-700 mb-12">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
        <p className="mb-4">
          Every day, companies and researchers want to know what real people think. tasksrewards exists to make it simple for you to share that perspective — and be rewarded for the time it takes.
        </p>
        <p className="mb-4">
          We're a referral partner, not a survey or task platform ourselves. When you qualify, we connect you with opportunities from our partner platforms, where you'll do the actual participating and earning.
        </p>
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
