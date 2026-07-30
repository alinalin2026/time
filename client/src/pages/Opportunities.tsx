import { Button } from "@/components/ui/button";
import { ClipboardList, Smartphone, Gamepad2, Shuffle } from "lucide-react";
import PageShell from "@/components/PageShell";

const opportunities = [
  {
    icon: ClipboardList,
    title: "Surveys",
    description: "Share your opinions on products, services, and everyday experiences. Most surveys take just a few minutes to complete.",
  },
  {
    icon: Smartphone,
    title: "App & Website Testing",
    description: "Try out new apps and websites, then share honest feedback about your experience. Companies value a real user's perspective.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Play games as part of select opportunities — a lighter, more casual way to participate when you have a few minutes to spare.",
  },
  {
    icon: Shuffle,
    title: "A Mix of Everything",
    description: "Not sure what you prefer? We'll surface a variety of opportunity types so you can find what fits your schedule and interests.",
  },
];

export default function Opportunities() {
  return (
    <PageShell title="Opportunities">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Opportunities on tasksrewards</h2>
        <p className="text-lg text-gray-600">
          What you'll find once you qualify — a variety of ways to share your opinions and time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {opportunities.map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
              <item.icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-8 mb-12 text-center">
        <p className="text-gray-700">
          Which opportunities are available to you depends on your location and eligibility. We'll match you with what's relevant after you complete the quick qualification questions.
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
