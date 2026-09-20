const T = ({ x, y, name, cols, accent = false }: {
  x: number; y: number; name: string; cols: string[]; accent?: boolean
}) => (
  <g transform={`translate(${x},${y})`}>
    <rect width="132" height={30 + cols.length * 15} rx="7"
      fill="var(--surface)" stroke={accent ? 'var(--accent)' : 'var(--line)'} strokeWidth={accent ? 1.6 : 1} />
    <rect width="132" height="24" rx="7" fill={accent ? 'var(--accent)' : 'var(--surface-2)'} />
    <rect y="17" width="132" height="7" fill={accent ? 'var(--accent)' : 'var(--surface-2)'} />
    <text x="11" y="16.5" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="500"
      fill={accent ? '#fff' : 'var(--text)'}>{name}</text>
    {cols.map((c, i) => (
      <text key={c} x="11" y={39 + i * 15} fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--faint)">{c}</text>
    ))}
  </g>
)

const L = ({ d }: { d: string }) => (
  <path d={d} fill="none" stroke="var(--line)" strokeWidth="1.3" />
)

const Flow = ({ d, dur }: { d: string; dur: string }) => (
  <circle r="3" fill="var(--accent)">
    <animateMotion dur={dur} repeatCount="indefinite" path={d} />
  </circle>
)

export default function ErDiagram() {
  return (
    <svg viewBox="0 48 900 342" width="100%" role="img"
      aria-label="Entity relationship diagram of the banking schema">
      <L d="M198 96 H300" />
      <L d="M198 240 H300" />
      <L d="M432 130 H520 V172" />
      <L d="M432 250 H520 V212" />
      <L d="M652 192 H742" />
      <L d="M586 140 V96 H742" />
      <L d="M586 244 V300 H742" />

      <Flow d="M198 96 H300" dur="3.4s" />
      <Flow d="M432 130 H520 V172" dur="4.2s" />
      <Flow d="M652 192 H742" dur="3.8s" />
      <Flow d="M198 240 H300" dur="4.6s" />

      <T x={66} y={70} name="deposito" cols={['id_dep', 'monto', 'fecha']} />
      <T x={66} y={214} name="debito" cols={['id_deb', 'monto', 'fecha']} />
      <T x={300} y={100} name="compra" cols={['id_compra', 'importe']} />
      <T x={300} y={214} name="transaccion" cols={['id_trans', 'fk_cuenta', 'fk_tipo']} accent />
      <T x={520} y={148} name="cuenta_bancaria" cols={['id_cuenta', 'saldo', 'fk_cliente']} accent />
      <T x={742} y={62} name="tipo_cuenta" cols={['id_tipo', 'nombre']} />
      <T x={742} y={162} name="cliente" cols={['id_cliente', 'nombre', 'fk_tipo']} accent />
      <T x={742} y={276} name="historial" cols={['id_hist', 'descrip', 'tipo']} />
    </svg>
  )
}
