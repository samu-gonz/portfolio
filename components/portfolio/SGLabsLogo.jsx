import Link from "next/link";
import { logoFont } from "../../lib/fonts";
import TerminalIcon from "./TerminalIcon";

export default function SGLabsLogo() {
  return (
    <Link
      href="/"
      aria-label="SG LABS — Inicio del portfolio"
      className="group inline-flex items-center gap-2.5 transition duration-300 hover:brightness-110 sm:gap-3"
    >
      <TerminalIcon className="h-9 w-9 shrink-0 text-white sm:h-10 sm:w-10" />
      <span
        className={`${logoFont.className} text-xl font-bold tracking-wide text-white sm:text-2xl`}
      >
        SG LABS
      </span>
    </Link>
  );
}
