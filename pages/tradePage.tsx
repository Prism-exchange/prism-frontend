'use client'

import CoinBar from '../components/Jokkai/coin/CoinBar'
import ExecuteOrder from '../components/Jokkai/ExecuteOrder'
import LiveChat from '../components/Jokkai/LiveChat'
import Nav from '../components/Jokkai/Nav'
import OrderBidOffer from '../components/Jokkai/OrderBidOffer'
import OrderHistory from '../components/Jokkai/OrderHistory'
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from '../public/static/charting_library'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const TVChartContainer = dynamic(
  () =>
    import('../components/Jokkai/TVChartContainer').then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
)

function tradePage() {
  const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
    symbol: 'PRSM',
    interval: '1D' as ResolutionString,
    library_path: '/static/charting_library/',
    locale: 'en',
    charts_storage_url: 'https://saveload.tradingview.com',
    charts_storage_api_version: '1.1',
    client_id: 'tradingview.com',
    user_id: 'public_user_id',
    fullscreen: false,
    autosize: true,
  }
  const [focus, setFocus] = useState({
    n: 'PRSM',
    s: '/icon.jpg',
    a: '0xdadasdasdasdsddsadasdasdas',
    c: '5',
    cp: '10%',
    l: '1000.1',
    v: '1651',
    t: '200',
  })
  return (
    <div className="flex divide-x-[1px] divide-slate-400 h-screen max-h-screen overflow-hidden p-1">
      <div className=" min-w-[85%] flex flex-col ">
        <Nav></Nav>
        <div className=" flex-1 ">
          <div className=" flex flex-col h-full max-w-full">
            <div className=" flex flex-1 divide-x">
              <div className=" flex flex-col h-full w-full">
                <CoinBar focus={focus}></CoinBar>
                <TVChartContainer {...defaultWidgetProps} />
              </div>
              <OrderBidOffer />
              <ExecuteOrder focus={focus} />
            </div>
            <OrderHistory></OrderHistory>
          </div>
        </div>
      </div>
      <LiveChat></LiveChat>
    </div>
  )
}

export default tradePage
