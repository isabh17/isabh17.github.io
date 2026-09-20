import { useCountUp } from '../hooks'

export default function Fact({ value, label }: { value: string; label: string }) {
  const { ref, out } = useCountUp(value)
  return (
    <div className="fact">
      <b ref={ref as React.RefObject<HTMLElement>}>{out}</b>
      <span>{label}</span>
    </div>
  )
}
