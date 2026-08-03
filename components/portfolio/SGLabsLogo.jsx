import Link from "next/link";
import { logoFont } from "../../lib/fonts";
import TerminalIcon from "./TerminalIcon";
import { cn } from "./uiTokens";

/**
 * @param {{
 *   className?: string;
 *   iconClassName?: string;
 *   textClassName?: string;
 *   asLink?: boolean;
 * }} props
 */
export default function SGLabsLogo({
  className,
  iconClassName = "h-10 w-10 shrink-0 text-white",
  textClassName = "text-2xl font-bold tracking-wide text-white",
  asLink = true,
}) {
  const content = (
    <>
      <TerminalIcon className={iconClassName} />
      <span className={cn(logoFont.className, "text-center", textClassName)}>SG LABS</span>
    </>
  );

  const rootClass = cn(
    "group inline-flex flex-col items-center gap-2 transition duration-300 hover:brightness-110",
    className,
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="SG LABS — Estudio de desarrollo web" className={rootClass}>
        {content}
      </Link>
    );
  }

  return (
    <div className={rootClass} aria-label="SG LABS">
      {content}
    </div>
  );
}
