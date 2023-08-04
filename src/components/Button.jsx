export default function Button(props) {
  const { children, text, className } = props;

  return (
    <button {...props} className={`mt-3 ${className} text-white rounded px-4 py-2 flex gap-1 justify-items-center`}>
      {text || children}
    </button>
  )
}