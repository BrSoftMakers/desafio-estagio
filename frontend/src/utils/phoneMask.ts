export default function phoneMask(value: string) {
  let r = value.replace(/\D/g, "")
  r = r.replace(/^0/, "")

  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d)(\d{4})(\d{4}).*/, "($1) $2 $3-$4")
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d)(\d{0,8}).*/, "($1) $2 $3")
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,4})/, "($1) $2")
  } else if (value.trim() !== "") {
    r = r.replace(/^(\d*)/, "($1")
  }
  return r
}
