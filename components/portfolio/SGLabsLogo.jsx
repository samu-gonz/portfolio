import Link from "next/link";
import { logoFont } from "../../lib/fonts";
import TerminalIcon from "./TerminalIcon";

export default function SGLabsLogo() {
  return (
    <Link
      href="/"
      aria-label="SG LABS — Inicio del portfolio"
      className="group inline-flex items-center gap-3 transition duration-300 hover:brightness-110"
    >
      <TerminalIcon className="h-10 w-10 shrink-0 text-white" />
      <span className={`${logoFont.className} text-2xl font-bold tracking-wide text-white`}>
        SG LABS
      </span>
    </Link>
  );
}
