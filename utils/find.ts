export const findPriceByPair = (
  list: TypeListPairOrder[],
  pairName: string
): string => {
  let temp: TypeListPairOrder[] = []
  let price = ''
  list.map((item) => {
    let namePair = item.symbolToken0 + '-' + item.symbolToken1
    if (namePair.toLocaleLowerCase().includes(pairName.toLocaleLowerCase())) {
      price = item.price
    }
  })
  return Number(price).toFixed(2)
}
