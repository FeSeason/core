export default function (arr, key) {
  let Temp = {}
  return arr.reduce((all, next) => {
    if (!Temp[next[key]]) {
      Temp[next.sellerId] = true
      all.push(next)
    }
    return all
  }, [])
}
