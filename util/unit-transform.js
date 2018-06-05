export default function (data) {
  if (!data) return ''
  data = data.toString()
  return data.includes('%') ? data : data.includes('px') ? data : data + 'px'
}
