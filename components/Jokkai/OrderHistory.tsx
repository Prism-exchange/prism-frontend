'use client'

import { useState } from 'react'

function OrderHistory() {
  const list = [{ t: 'Position' }, { t: 'Order' }, { t: 'Fill' }]
  const [mode, setMode] = useState(list[0])
  return (
    <div className=" h-[30%] border-t border-slate-400 flex divide-x divide-slate-400   ">
      <div className=" w-[30%]">
        <div className=" h-[40px] flex items-center ">History</div>
      </div>
      <div className=" w-[70%]">
        <div className=" h-[40px]  flex items-center border-b border-slate-400">
          {list.map((x, y) => (
            <div key={`OrderMode-${x.t}-${y}`} className=" px-2">
              {x.t}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
