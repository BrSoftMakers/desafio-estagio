export default function formatNumber(number: string) {
  const cleaned = ("" + number).replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})$/)
  if (match) {
    return [
      "(",
      match[2],
      ")",
      " ",
      match[3],
      " ",
      match[4],
      "-",
      match[5]
    ].join("")
  }
  return ""
}
