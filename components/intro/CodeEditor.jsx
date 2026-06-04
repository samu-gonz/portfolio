export default function CodeEditor({ colors }) {
  return (
    <div className="pointer-events-none absolute left-[24.15%] top-[22.9%] z-[1] h-[42.2%] w-[51.8%] overflow-hidden rounded-[10px] border border-white/5 bg-[#0b1020] p-4 font-mono text-[10px] text-slate-300 shadow-[0_12px_28px_rgba(2,6,23,0.35)] md:text-[11px]">
      <div className="mb-2 text-slate-500">workspace/core-engine.ts</div>
      <p style={{ color: colors.purple }}>
        const <span style={{ color: colors.cyan }}>pipeline</span> = <span style={{ color: colors.purple }}>async</span> () =&gt; &#123;
      </p>
      <p className="pl-4" style={{ color: colors.yellow }}>try &#123;</p>
      <p className="pl-8"><span style={{ color: colors.cyan }}>state.view</span> = <span style={{ color: colors.green }}>&quot;proyectos&quot;</span>;</p>
      <p className="pl-8" style={{ color: colors.purple }}>const schema = &#123;</p>
      <p className="pl-12" style={{ color: colors.cyan }}>model: <span style={{ color: colors.green }}>&quot;gpt-4.1&quot;</span>,</p>
      <p className="pl-12" style={{ color: colors.cyan }}>temperature: <span style={{ color: colors.yellow }}>0.2</span>,</p>
      <p className="pl-8">&#125;;</p>
      <p className="pl-8"><span style={{ color: colors.purple }}>await</span> <span style={{ color: colors.cyan }}>compile</span>(schema);</p>
      <p className="pl-4" style={{ color: colors.yellow }}>&#125; catch &#123;</p>
      <p className="pl-8"><span style={{ color: colors.cyan }}>console.log</span>(<span style={{ color: colors.green }}>&quot;Done&quot;</span>);</p>
      <p className="pl-4" style={{ color: colors.yellow }}>&#125;</p>
      <p>&#125;</p>
    </div>
  );
}
