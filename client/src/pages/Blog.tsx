import { Link } from "wouter";
import { Newspaper } from "lucide-react";
import PageShell from "@/components/PageShell";

const topics = [
  "Tips for finding the best opportunities for your schedule",
  "How companies use everyday opinions to shape products",
  "Staying safe: what to look for in any online opportunity",
];

export default function Blog() {
  return (
    <PageShell title="Blog">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-6 mx-auto">
          <Newspaper className="w-7 h-7 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blog Is Coming Soon</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We're working on articles to help you get the most out of tasksrewards. Here's a preview of what we're planning to cover:
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {topics.map((topic) => (
          <div key={topic} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700">
            {topic}
          </div>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-6 text-center text-sm text-gray-600">
        Check back soon, or reach out on our{" "}
        <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
          contact page
        </Link>{" "}
        if there's something specific you'd like us to cover.
      </div>
    </PageShell>
  );
}
