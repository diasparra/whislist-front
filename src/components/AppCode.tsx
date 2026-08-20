interface Props {
  value: string
}

export default function AppCode({ value }: Props) {
  return <code>{value}</code>
}
