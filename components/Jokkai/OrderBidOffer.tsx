import { TBidOfferData } from '../../types'
import classNames from 'classnames'
import { useState } from 'react'

function OrderBidOffer() {
  const [bidOffer, setBidOffer] = useState({
    bp: [10, 9, 8, 7, 6, 5, 4, 3],
    bv: [5, 2, 11, 4, 6, 8, 7, 1],
    op: [18, 17, 16, 15, 14, 13, 12, 11],
    ov: [40, 15, 5, 7, 12, 5, 4, 3],
  } as TBidOfferData)
  const [hover, setHover] = useState({} as Record<string, boolean>)
  const styleWidth = (v: any, i: number) => {
    const width = (v[i] / v.reduce((p: number, c: number) => p + c)) * 200
    return width >= 100 ? 100 : width
  }
  const styleBg = (v: any, k: string, i: number, c: string) => {
    const bgAdjust = (v[i] / v.reduce((p: number, c: number) => p + c)) * 500
    return hover[`${k}_${i}`]
      ? `rgba(${c})`
      : `rgba(${c},${bgAdjust > 75 ? 75 : bgAdjust}%)`
  }
  return (
    <div className=" w-[400px]  flex flex-col">
      <div className=" flex flex-col h-[50px] justify-center items-center border-b divide-y border-slate-400 ">
        <div>ORDER BOOK</div>
        <div className=" flex w-full divide-x text-sm py-1">
          <div className=" w-full text-center">Price.</div>
          <div className=" w-full text-center">Vol.</div>
        </div>
      </div>
      <div className=" h-full grid grid-flow-row grid-rows-17 p-[2px] ">
        {bidOffer.op.map((x, y) => {
          return (
            <div
              key={`offer_${x}_${y}_${bidOffer.ov[y]}`}
              className=" relative flex text-center hover:bg-slate-800 cursor-pointer"
              onMouseEnter={() => setHover({ [`offer_${y}`]: true })}
              onMouseLeave={() => setHover({ [`offer_${y}`]: false })}
            >
              <div className=" w-full z-[1]">{x}</div>
              <div className=" w-full z-[1]">{bidOffer.ov[y]}</div>
              <div
                className=" absolute right-0 h-full rounded-l-md z-[0]"
                style={{
                  width: `${styleWidth(bidOffer.ov, y)}%`,
                  background: styleBg(bidOffer.ov, `offer`, y, `239,68,68`),
                }}
              ></div>
            </div>
          )
        })}
        <div className=" bg-slate-900 text-center text-sm flex items-center justify-center cursor-default">
          {' '}
          Price Spread : 1
        </div>
        {bidOffer.bp.map((x, y) => {
          return (
            <div
              key={`bidd_${x}_${y}_${bidOffer.ov[y]}`}
              className="relative flex text-center hover:bg-slate-800 cursor-pointer"
              onMouseEnter={() => setHover({ [`bid_${y}`]: true })}
              onMouseLeave={() => setHover({ [`bid_${y}`]: false })}
            >
              <div className=" w-full z-[1]">{x}</div>
              <div className=" w-full z-[1]">{bidOffer.bv[y]}</div>
              <div
                className=" absolute right-0 h-full rounded-l-md z-[0]"
                style={{
                  width: `${styleWidth(bidOffer.bv, y)}%`,
                  background: styleBg(bidOffer.bv, `bid`, y, `34,197,94`),
                }}
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderBidOffer
