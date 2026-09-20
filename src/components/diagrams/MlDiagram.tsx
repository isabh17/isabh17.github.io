const Step = ({ x, n, title, sub }: { x: number; n: string; title: string; sub: string }) => (
  <g transform={`translate(${x},40)`}>
    <circle cx="22" cy="22" r="20" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
    <text x="22" y="27" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13"
      fill="var(--accent)">{n}</text>
    <text x="0" y="70" fontFamily="var(--font-body)" fontSize="13" fontWeight="500"
      fill="var(--text)">{title}</text>
    <text x="0" y="90" fontFamily="var(--font-mono)" fontSize="10" fill="var(--faint)">{sub}</text>
  </g>
)

export default function MlDiagram() {
  return (
    <svg viewBox="0 0 900 190" width="100%" role="img"
      aria-label="Chatbot pipeline: preprocessing, vectorization, training, browser deployment">
      <path d="M52 62 H196" stroke="var(--line)" strokeWidth="1.3" strokeDasharray="4 4" />
      <path d="M272 62 H416" stroke="var(--line)" strokeWidth="1.3" strokeDasharray="4 4" />
      <path d="M492 62 H636" stroke="var(--line)" strokeWidth="1.3" strokeDasharray="4 4" />
      <path d="M712 62 H856" stroke="var(--line)" strokeWidth="1.3" strokeDasharray="4 4" />

      <circle r="3" fill="var(--accent)">
        <animateMotion dur="6s" repeatCount="indefinite"
          path="M52 62 H196 M272 62 H416 M492 62 H636 M712 62 H856" />
      </circle>

      <Step x={8} n="1" title="Preprocess" sub="NLTK · tokenize + lemmatize" />
      <Step x={228} n="2" title="Vectorize" sub="bag of words" />
      <Step x={448} n="3" title="Train" sub="dense Keras network" />
      <Step x={668} n="4" title="Ship" sub="TensorFlow.js · no server" />

      <text x="8" y="178" fontFamily="var(--font-mono)" fontSize="10" fill="var(--faint)">
        inference runs in the browser · nothing leaves the device
      </text>
    </svg>
  )
}
