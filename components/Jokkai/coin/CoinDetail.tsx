import { TFOCUSTRADEINFO } from '../../../types'

function CoinDetail(props: { infoList: any; focus: TFOCUSTRADEINFO }) {
  return (
    <div className=" h-full min-w-[60%] flex-1 flex items-center divide-x text-center border-l border-white">
      {props.infoList.map((x: any, y: any) => (
        <div
          key={`${x.t}-${y}`}
          className=" flex flex-col text-center w-full px-2 whitespace-nowrap"
        >
          <div className="">{x.t}</div>
          <div className="text-[16px] font-light text-slate-400">
            {x.k === 'c'
              ? `${props.focus[x.k as keyof typeof props.focus]} (${
                  props.focus.cp
                })`
              : `${props.focus[x.k as keyof typeof props.focus]}`}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoinDetail
