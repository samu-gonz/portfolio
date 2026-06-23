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

function CodeLine({ tokens }) {
  return (
    <p className="whitespace-pre leading-[1.32]">
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
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#0b1020] font-mono text-[6px] leading-none sm:text-[7px] md:text-[8px] lg:text-[9px]">
      <div className="flex h-[16%] min-h-[22px] shrink-0 items-center border-b border-[#1a1a1a] bg-[#181818] px-[0.65em]">
        <span className="truncate text-[0.95em] font-medium text-[#cccccc]">IntroSequence.jsx</span>
      </div>
      <pre className="min-h-0 flex-1 overflow-hidden bg-[#0b1020] px-2 py-1.5 sm:px-2.5 sm:py-2" aria-hidden>
        <code className="block w-full">
          {CODE_LINES.map((tokens, index) => (
            <CodeLine key={index} tokens={tokens} />
          ))}
        </code>
      </pre>
    </div>
  );
}
