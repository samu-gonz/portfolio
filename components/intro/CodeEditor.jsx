const SYNTAX = {
  keyword: "text-violet-400",
  string: "text-emerald-400",
  number: "text-amber-400",
  fn: "text-sky-400",
  plain: "text-slate-300",
  punct: "text-slate-400",
};

const CODE_LINES = [
  [
    { t: "import", c: "keyword" },
    { t: " { useState } ", c: "plain" },
    { t: "from", c: "keyword" },
    { t: ' "react";', c: "string" },
  ],
  [
    { t: "import", c: "keyword" },
    { t: " Image ", c: "plain" },
    { t: "from", c: "keyword" },
    { t: ' "next/image";', c: "string" },
  ],
  [
    { t: "import", c: "keyword" },
    { t: " { AnimatePresence, motion, useAnimation } ", c: "plain" },
    { t: "from", c: "keyword" },
    { t: ' "framer-motion";', c: "string" },
  ],
  [
    { t: "const", c: "keyword" },
    { t: " SCENE ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: '"/intro-scene.png";', c: "string" },
  ],
  [
    { t: "const", c: "keyword" },
    { t: " HAND ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: '"/intro-hand.png";', c: "string" },
  ],
  [
    { t: "export default function", c: "keyword" },
    { t: " IntroSequence", c: "fn" },
    { t: "({ onComplete, onEnter }) {", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " [isZooming, setIsZooming] ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: "useState", c: "fn" },
    { t: "(false);", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " handControls ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: "useAnimation", c: "fn" },
    { t: "();", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " handleEnter ", c: "plain" },
    { t: "= onEnter ?? onComplete;", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " ejecutarEntrada ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: "async", c: "keyword" },
    { t: " () => {", c: "plain" },
  ],
  [
    { t: "    if", c: "keyword" },
    { t: " (isZooming || !handleEnter) ", c: "plain" },
    { t: "return", c: "keyword" },
    { t: ";", c: "plain" },
  ],
  [
    { t: "    await", c: "keyword" },
    { t: " handControls.start", c: "fn" },
    { t: "({ y: [", c: "plain" },
    { t: "-28", c: "number" },
    { t: ", ", c: "punct" },
    { t: "34", c: "number" },
    { t: ", ", c: "punct" },
    { t: "-20", c: "number" },
    { t: "] });", c: "plain" },
  ],
  [
    { t: "    setIsZooming", c: "fn" },
    { t: "(true);", c: "plain" },
  ],
  [
    { t: "    setTimeout", c: "fn" },
    { t: "(() => handleEnter(), ", c: "plain" },
    { t: "900", c: "number" },
    { t: ");", c: "plain" },
  ],
  [{ t: "  };", c: "plain" }],
  [
    { t: "  return", c: "keyword" },
    { t: " (", c: "plain" },
  ],
  [
    { t: "    <", c: "punct" },
    { t: "AnimatePresence", c: "fn" },
    { t: ">", c: "plain" },
  ],
  [
    { t: "      <", c: "punct" },
    { t: "motion.section", c: "fn" },
    { t: " key=", c: "plain" },
    { t: '"intro"', c: "string" },
    { t: " />", c: "punct" },
  ],
  [{ t: "  );", c: "plain" }],
  [{ t: "}", c: "plain" }],
];

const CODE_LINES_MOBILE = [
  [
    { t: "import", c: "keyword" },
    { t: " { useState } from ", c: "plain" },
    { t: '"react"', c: "string" },
    { t: ";", c: "punct" },
  ],
  [
    { t: "import", c: "keyword" },
    { t: " { motion } from ", c: "plain" },
    { t: '"framer-motion"', c: "string" },
    { t: ";", c: "punct" },
  ],
  [],
  [
    { t: "export default function", c: "keyword" },
    { t: " IntroSequence() {", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " [zoom, setZoom] ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: "useState", c: "fn" },
    { t: "(false);", c: "plain" },
  ],
  [],
  [
    { t: "  const", c: "keyword" },
    { t: " enter ", c: "plain" },
    { t: "= () => {", c: "plain" },
  ],
  [
    { t: "    setZoom", c: "fn" },
    { t: "(true);", c: "plain" },
  ],
  [{ t: "    onComplete?.();", c: "plain" }],
  [{ t: "  };", c: "plain" }],
  [],
  [
    { t: "  return ", c: "keyword" },
    { t: "<BootScreen zoom={zoom} />;", c: "plain" },
  ],
  [{ t: "}", c: "plain" }],
];

function CodeLine({ tokens, compact }) {
  if (!tokens.length) {
    return <p className={compact ? "h-[0.55em]" : "h-[0.65em]"} aria-hidden />;
  }

  return (
    <p className={`whitespace-pre ${compact ? "leading-[1.45]" : "leading-[1.32]"}`}>
      {tokens.map((token, index) => (
        <span key={`${token.t}-${index}`} className={SYNTAX[token.c] ?? SYNTAX.plain}>
          {token.t}
        </span>
      ))}
    </p>
  );
}

/**
 * @param {{ variant?: "embedded" | "mobile" }} props
 */
export default function CodeEditor({ variant = "embedded" }) {
  const isMobile = variant === "mobile";
  const lines = isMobile ? CODE_LINES_MOBILE : CODE_LINES;

  return (
    <div
      className={
        isMobile
          ? "flex h-full w-full flex-col overflow-hidden bg-[#0b1020] font-mono text-[10.5px] leading-none sm:text-[11px]"
          : "flex h-full w-full flex-col overflow-hidden bg-[#0b1020] font-mono text-[max(3.25px,2.55cqi)] leading-none"
      }
    >
      {!isMobile && (
        <div className="flex h-[16%] min-h-[14px] shrink-0 items-center border-b border-[#1a1a1a] bg-[#181818] px-[0.65em]">
          <span className="truncate text-[0.95em] font-medium text-[#cccccc]">IntroSequence.jsx</span>
        </div>
      )}
      <pre
        className={
          isMobile
            ? "min-h-0 flex-1 overflow-hidden bg-[#0b1020] px-3.5 py-3"
            : "min-h-0 flex-1 overflow-hidden bg-[#0b1020] px-[0.55em] py-[0.45em]"
        }
        aria-hidden
      >
        <code className="block w-full">
          {lines.map((tokens, index) => (
            <CodeLine key={index} tokens={tokens} compact={isMobile} />
          ))}
        </code>
      </pre>
    </div>
  );
}
