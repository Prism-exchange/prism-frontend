import classNames from 'classnames'
import { useState } from 'react'
import InputFormat from './InputFormat'
import { TFOCUSTRADEINFO } from '../../types'

function ExecuteOrder(props: { focus: TFOCUSTRADEINFO }) {
  const modeList = ['LIMIT', 'MARKET']
  const [mode, setMode] = useState('LIMIT' as 'LIMIT' | 'MARKET')
  const exeList = [
    {
      n: 'BUY',
      d: ' border-[1.5px] border-opacity-80 border-green-500 ',
      s: 'bg-green-500/80 ',
    },
    {
      n: 'SELL',
      d: ' border-[1.5px] border-opacity-80 border-red-500',
      s: 'bg-red-500/80',
    },
  ]
  const [exe, setExe] = useState('BUY')
  return (
    <div className=" w-[500px] flex flex-col justify-between ">
      <div className=" flex flex-col">
        <div className=" h-[50px] py border-b border-slate-400 grid grid-cols-2 divide-x divide-slate-400">
          {modeList.map((x, y) => (
            <div
              key={`${x}_${y}`}
              className={classNames(
                ' flex justify-center items-center cursor-pointer ',
                {
                  // ' bg-slate-900 hover:bg-slate-900 text-slate-700 hover:cursor-default ':
                  //   x === 'STOP',
                },
                { ' bg-slate-700 ': mode === x }
              )}
              onClick={() => {
                setMode(x as any)
              }}
            >
              {`${x}`}
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-y-[10px] p-2">
          <div className="  flex gap-x-[5px]">
            {exeList.map((x, y) => (
              <div
                key={`${x.n}-${y}`}
                className={classNames(
                  ' w-full text-center p-1 rounded-md cursor-pointer',
                  exe === x.n ? x.s : x.d
                )}
                onClick={() => setExe(x.n)}
              >
                {x.n}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-y-[10px] px-2">
          {mode === 'LIMIT' && <InputFormat text="Limit Price"></InputFormat>}
          <InputFormat text={`Amount ${props.focus.n}`}></InputFormat>
          <InputFormat text={`Amount USD`}></InputFormat>
        </div>
      </div>

      <div className=" p-2 flex flex-col gap-y-2">
        <div className=" flex flex-col justify-center  p-2 bg-slate-600 rounded-md cursor-default">
          <div>
            <div> Expected Price:</div>
            <div>Fee : </div>
            <div> Total: </div>
          </div>
        </div>
        <div className=" cursor-pointer  h-[50px] w-full flex justify-center items-center bg-slate-600 rounded-md">
          Execute Order
        </div>
      </div>
    </div>
  )
}

export default ExecuteOrder
