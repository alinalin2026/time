import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Gift, Wallet, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function Rewards() {
  return (
    <PageShell title="Rewards">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Rewards Work</h2>
        <p className="text-lg text-gray-600">Flexible ways to be rewarded for your time and opinions.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
            <Gift className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Variety of Options</h3>
          <p className="text-gray-600 text-sm">Rewards can include gift cards, cash-out options, and other perks, depending on the opportunity.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
            <Wallet className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Your Choice</h3>
          <p className="text-gray-600 text-sm">You choose which opportunities to take part in — there's no obligation or minimum commitment.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">On Your Schedule</h3>
          <p className="text-gray-600 text-sm">Participate whenever it works for you. No quotas, no set hours.</p>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-12">
        <h3 className="font-bold text-gray-900 mb-2">A Note on Earnings</h3>
        <p className="text-gray-700 text-sm">
          Rewards vary based on the opportunities available to you, how often you participate, and your location. We don't guarantee specific earnings or outcomes — see our{" "}
          <Link href="/disclaimer" className="text-purple-600 hover:text-purple-700 font-semibold">
            Disclaimer
          </Link>{" "}
          for full details.
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
