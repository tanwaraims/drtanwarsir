import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/918118853033?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="absolute right-full mr-3 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
