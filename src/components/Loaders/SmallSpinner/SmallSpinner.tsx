import { ReactComponent as SvgLoading } from 'src/Loading.svg'

export default function SmallSpinner() {
  return (
    <div className="loader-container">
      <SvgLoading className="animate-spin" />
    </div>
  )
}
