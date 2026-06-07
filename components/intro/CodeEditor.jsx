const SYNTAX = {
  keyword: "text-violet-400",
  string: "text-emerald-400",
  number: "text-amber-400",
  fn: "text-sky-400",
  plain: "text-slate-300",
  muted: "text-slate-500",
  punct: "text-slate-400",
};

const FILE_NAME = "components/IntroSequence.jsx";

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
  [],
  [
    { t: "const", c: "keyword" },
    { t: " SCENE ", c: "plain" },
    { t: "=", c: "punct" },
    { t: ' "/intro-scene.png";', c: "string" },
  ],
  [
    { t: "const", c: "keyword" },
    { t: " HAND ", c: "plain" },
    { t: "=", c: "punct" },
    { t: ' "/intro-hand.png";', c: "string" },
  ],
  [],
  [
    { t: "const", c: "keyword" },
    { t: " HAND_HOVER_Y ", c: "plain" },
    { t: "= ", c: "punct" },
    { t: "-22", c: "number" },
    { t: ";", c: "punct" },
  ],
  [],
  [
    { t: "export default function", c: "keyword" },
    { t: " IntroSequence", c: "fn" },
    { t: "({ onComplete, onEnter }) {", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " [isZooming, setIsZooming] ", c: "plain" },
    { t: "=", c: "punct" },
    { t: " useState", c: "fn" },
    { t: "(false);", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " handControls ", c: "plain" },
    { t: "=", c: "punct" },
    { t: " useAnimation", c: "fn" },
    { t: "();", c: "plain" },
  ],
  [
    { t: "  const", c: "keyword" },
    { t: " handleEnter ", c: "plain" },
    { t: "=", c: "punct" },
    { t: " onEnter ?? onComplete;", c: "plain" },
  ],
  [],
  [
    { t: "  const", c: "keyword" },
    { t: " ejecutarEntrada ", c: "plain" },
    { t: "=", c: "punct" },
    { t: " async", c: "keyword" },
    { t: " () => {", c: "plain" },
  ],
  [
    { t: "    if", c: "keyword" },
    { t: " (isZooming || !handleEnter) ", c: "plain" },
    { t: "return", c: "keyword" },
    { t: ";", c: "punct" },
  ],
  [],
  [
    { t: "    await", c: "keyword" },
    { t: " handControls.start", c: "fn" },
    { t: "({", c: "plain" },
  ],
  [
    { t: "      y: [", c: "plain" },
    { t: "-28", c: "number" },
    { t: ", ", c: "punct" },
    { t: "34", c: "number" },
    { t: ", ", c: "punct" },
    { t: "-20", c: "number" },
    { t: "],", c: "plain" },
  ],
  [
    { t: "      transition: { duration: ", c: "plain" },
    { t: "0.58", c: "number" },
    { t: " },", c: "plain" },
  ],
  [{ t: "    });", c: "plain" }],
  [],
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
  [],
  [
    { t: "  return", c: "keyword" },
    { t: " (", c: "plain" },
  ],
  [
    { t: "    <", c: "punct" },
    { t: "AnimatePresence", c: "fn" },
    { t: ">", c: "punct" },
  ],
  [
    { t: "      <", c: "punct" },
    { t: "motion.section", c: "fn" },
    { t: " key=", c: "plain" },
    { t: '"intro"', c: "string" },
    { t: ">", c: "punct" },
  ],
];

function CodeLine({ tokens }) {
  if (!tokens.length) return <div className="h-[0.55em]" aria-hidden />;

  return (
    <p className="whitespace-pre leading-[1.45]">
      {tokens.map((token, index) => (
        <span key={`${token.t}-${index}`} className={SYNTAX[token.c] ?? SYNTAX.plain}>
          {token.t}
        </span>
      ))}
    </p>
  );
}

export default function CodeEditor() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#0b1020] p-2.5 font-mono text-[7px] leading-none sm:p-3 sm:text-[8px] md:text-[9px] lg:text-[10px]">
      <header className="mb-1.5 shrink-0 border-b border-white/5 pb-1.5">
        <span className={SYNTAX.muted}>{FILE_NAME}</span>
      </header>
      <pre className="min-h-0 flex-1 overflow-hidden" aria-hidden>
        <code>
          {CODE_LINES.map((tokens, index) => (
            <CodeLine key={index} tokens={tokens} />
          ))}
        </code>
      </pre>
    </div>
  );
}
