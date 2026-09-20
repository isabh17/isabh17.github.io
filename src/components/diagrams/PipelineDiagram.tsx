type Node = { x: number; y: number; label: string; sub?: string; accent?: boolean }

const N = ({ x, y, label, sub, accent }: Node) => (
  <g transform={`translate(${x},${y})`}>
    <rect width="122" height={sub ? 54 : 40} rx="10"
      fill={accent ? 'color-mix(in srgb, var(--accent) 16%, var(--surface))' : 'var(--surface)'}
      stroke={accent ? 'var(--accent)' : 'var(--line)'} strokeWidth={accent ? 1.5 : 1} />
    <text x="61" y={sub ? 24 : 25} textAnchor="middle" fontFamily="var(--font-mono)"
      fontSize="11" fill="var(--text)">{label}</text>
    {sub && (
      <text x="61" y="41" textAnchor="middle" fontFamily="var(--font-mono)"
        fontSize="9" fill="var(--faint)">{sub}</text>
    )}
  </g>
)

const Arrow = ({ d }: { d: string }) => (
  <path d={d} fill="none" stroke="var(--line)" strokeWidth="1.4" markerEnd="url(#ah)" />
)

const Pulse = ({ d, dur, delay = '0s' }: { d: string; dur: string; delay?: string }) => (
  <circle r="3.4" fill="var(--accent)">
    <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={d} />
  </circle>
)

export default function PipelineDiagram() {
  return (
    <svg viewBox="0 0 900 296" width="100%" role="img"
      aria-label="Data flow: Locust to gRPC to Kafka to consumer to Redis and MongoDB">
      <defs>
        <marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7 z" fill="var(--line)" />
        </marker>
      </defs>

      <Arrow d="M130 90 H168" />
      <Arrow d="M298 90 H336" />
      <Arrow d="M466 90 H504" />
      <Arrow d="M634 90 H672 V62" />
      <Arrow d="M634 90 H672 V186" />
      <Arrow d="M796 62 V38 H860" />
      <Arrow d="M796 208 V244 H860" />

      <Pulse d="M130 90 H168" dur="2.4s" />
      <Pulse d="M298 90 H336" dur="2.4s" delay="0.5s" />
      <Pulse d="M466 90 H504" dur="2.4s" delay="1s" />
      <Pulse d="M634 90 H672 V62" dur="2.6s" delay="1.5s" />
      <Pulse d="M634 90 H672 V186" dur="2.6s" delay="1.8s" />

      <N x={8} y={70} label="Locust" sub="load generator" />
      <N x={176} y={70} label="gRPC" sub="Go server" accent />
      <N x={344} y={70} label="Kafka" sub="queue" accent />
      <N x={512} y={70} label="consumer" sub="Go" accent />
      <N x={674} y={36} label="Redis" sub="live counters" />
      <N x={674} y={160} label="MongoDB" sub="durable records" />
      <N x={764} y={4} label="Grafana" />
      <N x={764} y={228} label="Node + Vue" sub="Cloud Run" />

      <text x="8" y="282" fontFamily="var(--font-mono)" fontSize="10" fill="var(--faint)">
        all services containerized · deployed on Kubernetes
      </text>
    </svg>
  )
}
