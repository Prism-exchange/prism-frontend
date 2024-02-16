export type TBidOfferData = {
  vs: number // version
  ts: number // timeStamp
  bp: Array<number> // bidPrice
  bv: Array<number> // bidVol
  op: Array<number> // offerPrice
  ov: Array<number> // offerVol
  //   bmv: Array<number> // bid matched version
  //   omv: Array<number> // o
}
