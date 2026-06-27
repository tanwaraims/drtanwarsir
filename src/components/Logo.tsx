import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  linked?: boolean;
}

const fontSizes = {
  sm: { name: 16, sub: 16 },
  md: { name: 22, sub: 22 },
  lg: { name: 28, sub: 28 },
} as const;

export default function Logo({
  variant = "dark",
  size = "md",
  linked = true,
}: LogoProps) {
  const logoContent = (
    <div className="flex flex-col items-center justify-center leading-[1.1] tracking-wider">
      <span
        className={`font-heading font-extrabold uppercase ${
          variant === "light" ? "text-white" : "text-primary"
        }`}
        style={{ fontSize: fontSizes[size].name }}
      >
        DR TANWAR SIR
      </span>
      <span
        className="font-heading font-extrabold uppercase text-accent"
        style={{ fontSize: fontSizes[size].sub, marginTop: "-0.1em" }}
      >
        MATHS
      </span>
    </div>
  );

  if (!linked) return logoContent;

  return (
    <Link href="/" aria-label="Dr. Tanwar Sir Maths - Home" className="inline-block hover:opacity-90 transition-opacity">
      {logoContent}
    </Link>
  );
}
