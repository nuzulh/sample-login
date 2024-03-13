export function InputText(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        style={{ padding: '6px' }}
        {...props}
      />
    </div>
  )
}
