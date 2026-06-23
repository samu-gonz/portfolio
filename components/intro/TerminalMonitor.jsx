const PROMPT = "guest@portfolio:~$- ";

/**
 * @param {{
 *   typed: string;
 *   showCursor: boolean;
 * }} props
 */
export default function TerminalMonitor({ typed, showCursor }) {
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#0c0c0c] font-mono leading-none"
      style={{ fontSize: "clamp(5px, 2.2cqi, 16px)" }}
    >
      <div className="flex h-[9%] shrink-0 items-center border-b border-[#1a1a1a] bg-[#1f1f1f] px-[0.55em]">
        <span className="truncate text-[0.85em] text-[#cccccc]">Windows PowerShell</span>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-[0.55em] py-[0.45em]">
        <p className="m-0 break-all text-[#4ec9b0]">
          <span className="text-[#9cdcfe]">{PROMPT}</span>
          <span className="text-[#dcdcaa]">{typed}</span>
          {showCursor && (
            <span aria-hidden className="terminal-cursor ml-px inline-block text-[#dcdcaa]">
              ▊
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
