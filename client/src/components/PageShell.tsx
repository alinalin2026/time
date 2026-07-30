import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export default function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-purple-100">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container max-w-3xl mx-auto py-12">
        {children}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Return to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
