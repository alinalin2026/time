import { Link } from "wouter";
import { Briefcase } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function Careers() {
  return (
    <PageShell title="Careers">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-6 mx-auto">
          <Briefcase className="w-7 h-7 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Careers at tasksrewards</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We don't have any open positions right now, but we're always glad to hear from people who care about building a trustworthy, women-focused rewards platform.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center mb-12">
        <p className="text-gray-700">
          Interested in future opportunities? Send us a note through our{" "}
          <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
            contact page
          </Link>{" "}
          and we'll keep you in mind as things open up.
        </p>
      </div>
    </PageShell>
  );
}
