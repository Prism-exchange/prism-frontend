'use client'

import Image from 'next/image'

function CoinTab(focus: any) {
  return (
    <div className=" h-full min-w-max w-full max-w-[30%] flex gap-x-[10px] items-center  bg-slate-800 px-[10px] cursor-pointer">
      <Image
        alt=""
        src={focus.s}
        width={30}
        height={30}
        className=" rounded-full p-[2px] bg-white"
      ></Image>
      <div className="w-full flex justify-between items-center gap-x-[10px]">
        <div className=" text-[16px]">{focus.n}</div>
        <div className=" text-[16px]">${focus.l}</div>
        <Image
          src={'/chevron_d.svg'}
          alt=""
          width={'0'}
          height={'0'}
          style={{ width: '1em', height: '1em' }}
        ></Image>
      </div>
    </div>
  )
}

export default CoinTab
