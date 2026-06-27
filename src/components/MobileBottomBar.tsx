import { Phone, BookOpen } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-3 py-2.5 flex gap-2">
      <a
        href="tel:+918118853033"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-semibold text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-md font-bold text-sm"
      >
        <BookOpen className="w-4 h-4" />
        Book Free Demo
      </Link>
    </div>
  );
}
