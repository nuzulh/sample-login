export function HelperText({
  message
}: {
  message: string | null
}) {
  if (!message) return null

  return <p style={{ color: 'red' }}>{message}</p>
}
