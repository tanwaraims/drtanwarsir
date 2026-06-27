import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  linked?: boolean;
}

const sizes = { sm: 32, md: 44, lg: 56 } as const;
const fontSizes = { sm: { name: 14, sub: 10 }, md: { name: 16, sub: 11 }, lg: { name: 20, sub: 13 } } as const;

export default function Logo({
  variant = "dark",
  size = "md",
  linked = true,
}: LogoProps) {
  const imgSize = sizes[size];

  const logoContent = (
    <div className="flex items-center gap-2.5">
      {/* Logo mark - swap with <Image> when real logo PNG is ready */}
      <div
        className="flex items-center justify-center rounded-lg font-bold text-white"
        style={{
          width: imgSize,
          height: imgSize,
          background: "linear-gradient(135deg, #1D2E4E 55%, #2EB394 100%)",
          fontSize: imgSize * 0.38,
        }}
        aria-hidden="true"
      >
        DT
      </div>
      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold ${variant === "light" ? "text-white" : "text-primary"}`}
          style={{ fontSize: fontSizes[size].name }}
        >
          Dr. Tanwar Sir
        </span>
        <span
          className="font-medium text-accent"
          style={{ fontSize: fontSizes[size].sub }}
        >
          Maths
        </span>
      </div>
    </div>
  );

  if (!linked) return logoContent;

  return (
    <Link href="/" aria-label="Dr. Tanwar Sir Maths - Home">
      {logoContent}
    </Link>
  );
}

// TO SWAP IN REAL LOGO LATER:
// Replace the logo mark <div> block above with:
//
// <Image
//   src={variant === "light" ? "/images/logo-white.png" : "/images/logo.png"}
//   alt="Dr. Tanwar Sir Maths"
//   width={imgSize * 3}
//   height={imgSize}
//   className="h-auto"
//   style={{ maxHeight: imgSize }}
//   priority
// />
