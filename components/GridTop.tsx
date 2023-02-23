//Create a component that can take object values
interface Props {
  title: string
  subtitle: string
}
export default function TextTop({ title, subtitle }: Props) {
  return (
    <>
    <h1 className="text-5xl text-col-neutral-100">{title}</h1>
    <h2 className="text-col-neutral-250">{subtitle}</h2>
    </>
  )
}
