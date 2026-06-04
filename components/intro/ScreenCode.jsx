export default function ScreenCode() {
  return (
    <g fontFamily="ui-monospace, monospace" fontSize="17" fontWeight="600">
      <rect x="360" y="86" width="880" height="456" rx="12" fill="#050814" />
      <rect x="360" y="86" width="880" height="44" rx="12" fill="#0c1120" />
      <text x="388" y="114" fill="#64748b" fontSize="15" fontWeight="500">
        workspace/core-engine.ts
      </text>

      <text x="388" y="162" fill="#f472b6">
        const
      </text>
      <text x="448" y="162" fill="#22d3ee">
        pipeline
      </text>
      <text x="538" y="162" fill="#f472b6">
        =
      </text>
      <text x="558" y="162" fill="#34d399">
        async
      </text>
      <text x="618" y="162" fill="#e2e8f0">
        () =&gt; &#123;
      </text>

      <text x="412" y="198" fill="#fbbf24">
        try
      </text>
      <text x="448" y="198" fill="#e2e8f0">
        &#123;
      </text>

      <text x="436" y="234" fill="#22d3ee">
        state.view
      </text>
      <text x="548" y="234" fill="#f472b6">
        =
      </text>
      <text x="568" y="234" fill="#34d399">
        &quot;proyectos&quot;
      </text>
      <text x="698" y="234" fill="#e2e8f0">
        ;
      </text>

      <text x="436" y="270" fill="#f472b6">
        const
      </text>
      <text x="496" y="270" fill="#e2e8f0">
        schema
      </text>
      <text x="568" y="270" fill="#f472b6">
        =
      </text>
      <text x="588" y="270" fill="#e2e8f0">
        &#123;
      </text>

      <text x="460" y="306" fill="#22d3ee">
        model:
      </text>
      <text x="528" y="306" fill="#34d399">
        &quot;gpt-4.1&quot;
      </text>
      <text x="638" y="306" fill="#e2e8f0">
        ,
      </text>

      <text x="460" y="342" fill="#22d3ee">
        temperature:
      </text>
      <text x="588" y="342" fill="#fbbf24">
        0.2
      </text>
      <text x="618" y="342" fill="#e2e8f0">
        ,
      </text>

      <text x="436" y="378" fill="#e2e8f0">
        &#125;;
      </text>

      <text x="436" y="414" fill="#f472b6">
        await
      </text>
      <text x="488" y="414" fill="#22d3ee">
        compile
      </text>
      <text x="578" y="414" fill="#e2e8f0">
        (schema);
      </text>

      <text x="412" y="450" fill="#e2e8f0">
        &#125;
      </text>
      <text x="436" y="450" fill="#fbbf24">
        catch
      </text>
      <text x="488" y="450" fill="#e2e8f0">
        &#123;
      </text>

      <text x="436" y="486" fill="#22d3ee">
        console.log
      </text>
      <text x="558" y="486" fill="#e2e8f0">
        (
      </text>
      <text x="568" y="486" fill="#34d399">
        &quot;Done&quot;
      </text>
      <text x="638" y="486" fill="#e2e8f0">
        );
      </text>

      <text x="412" y="522" fill="#e2e8f0">
        &#125;
      </text>
      <text x="388" y="558" fill="#e2e8f0">
        &#125;;
      </text>
    </g>
  );
}
