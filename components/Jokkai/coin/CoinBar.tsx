'use client'

import { useState } from 'react'
import CoinTab from './CoinTab'
import CoinDetail from './CoinDetail'
import { TFOCUSTRADEINFO } from '../../../types'
function CoinBar(props: { focus: TFOCUSTRADEINFO }) {
  const infoList: { t: string; k: keyof typeof props.focus }[] = [
    {
      t: `Change`,
      k: 'c',
    },
    {
      t: `Volume`,
      k: 'v',
    },
    {
      t: `Trade`,
      k: 't',
    },
  ]

  return (
    <div className=" h-[50px] w-full flex items-center border-b border-slate-400">
      <CoinTab {...props.focus}></CoinTab>
      <CoinDetail infoList={infoList} focus={props.focus}></CoinDetail>
    </div>
  )
}

export default CoinBar
