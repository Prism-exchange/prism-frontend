'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  LibrarySymbolInfo,
  OnReadyCallback,
  PeriodParams,
  ResolutionString,
  SearchSymbolsCallback,
  widget,
} from '../../public/static/charting_library'
import classNames from 'classnames'

export const TVChartContainer = (
  props: Partial<ChartingLibraryWidgetOptions>
) => {
  const [rtcb, setRTCB] = useState(() => {})
  const [rcncb, setRCNCB] = useState(() => {})
  const dataFeeding = () => {
    const configurationData = {
      supported_resolutions: [
        '1',
        '5',
        '15',
        '30',
        '60',
        '1D',
        '1W',
        '1M',
        '12M',
      ] as ResolutionString[],
      exchanges: [],
      symbols_types: [],
    }

    // const lastBarsCache = new Map()

    const functional = {
      onReady: (callback: OnReadyCallback) => {
        setTimeout(() => callback(configurationData))
      },
      searchSymbols: async (
        userInput: string,
        exchange: string,
        symbolType: string,
        onResultReadyCallback: SearchSymbolsCallback
      ) => {},
      resolveSymbol: async (
        symbolName: string,
        onSymbolResolvedCallback: any,
        onResolveErrorCallback: any
      ) => {
        const symbolInfo: LibrarySymbolInfo = {
          ticker: '',
          name: symbolName,
          description: '',
          type: 'crypto',
          session: '24x7',
          timezone: 'Etc/UTC',
          exchange: '',
          minmov: 1,
          pricescale: 100,
          has_intraday: true,
          // has_no_volume: false,
          has_weekly_and_monthly: true,
          supported_resolutions: configurationData.supported_resolutions,
          intraday_multipliers: [
            '1',
            '5',
            '15',
            '30',
            '60',
            '120',
            '240',
            '720',
          ],
          volume_precision: 2,
          data_status: 'streaming',
          full_name: '',
          listed_exchange: '',
          format: 'price',
        }
        setTimeout(() => {
          onSymbolResolvedCallback(symbolInfo)
        }, 0)
      },
      getBars: async (
        symbolInfo: LibrarySymbolInfo,
        resolution: ResolutionString,
        periodParams: PeriodParams,
        onHistoryCallback: any,
        onErrorCallback: any
      ) => {
        const { to, firstDataRequest } = periodParams

        // if (oldestBar.value && oldestBar.value > to * 1000) {

        // }
        try {
          // const { data } = await useServices.getChartById({
          //   isLightweight: false,
          //   orderBookId: +props.rooms,
          //   resolution: formatResolution,
          // })
          // if (!data.result || data.errMsg) return
          const data: any = []
          if (!data || data.length === 0) return
          data.result.list!.forEach((candle: any) => {
            // candle[CandleIdx.vol] = BigInt(candle[CandleIdx.vol])
            // candle[CandleIdx.startTime] = findStartTime(
            //   candle[CandleIdx.startTime],
            //   formatResolution as TimeFrame
            // )
          })
          // graph.addCandle(candle)

          // oldestBar.value = data.result.list[0][0]
          // if (!data.result || data.result.list.length === 0) {
          //   onHistoryCallback([], {
          //     noData: true,
          //   })
          //   return
          // }
          // const bars = graph.candles[symbolInfo.name].map((c) => {
          // return {
          //   time: c[0],
          //   low: c[1],
          //   high: c[2],
          //   open: c[3],
          //   close: c[4],
          //   volume: c[5],
          // }
          // })
          // .sort((a, b) => +a.time - +b.time)
          const bars: any = []
          if (bars.length === 0) {
            onHistoryCallback([], {
              noData: true,
            })
            return
          }
          if (firstDataRequest) {
            if (!bars) return
          }

          onHistoryCallback(bars, {
            noData: false,
          })
          // if (curSymbol.value === symbolInfo.name) isInitChart.value = false
        } catch (error) {
          onErrorCallback(error)
        }
      },
      subscribeBars: (
        symbolInfo: LibrarySymbolInfo,
        resolution: ResolutionString,
        onRealtimeCallback: any,
        subscribeUID: string,
        onResetCacheNeededCallback: any
      ) => {
        setRTCB(onRealtimeCallback)
        setRCNCB(onResetCacheNeededCallback)
      },
      unsubscribeBars: (subscribeUID: string) => {},
    }

    return { ...functional }
  }
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: dataFeeding(),
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: [
        // 'use_localstorage_for_settings'
        'header_saveload',
        'header_undo_redo',
        'header_symbol_search', // ปิด symbol search
        'symbol_search_hot_key', // ปิด hotkey symbol search
        'show_interval_dialog_on_key_press', // ปิด hotkey แก้ interval
        'edit_buttons_in_legend',
        'header_compare',
      ],
      enabled_features: [
        // 'study_templates',
        'items_favoriting',
      ],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: 'dark',
    }

    const tvWidget = new widget(widgetOptions)

    tvWidget.onChartReady(() => {
      tvWidget
        .activeChart()
        .onDataLoaded()
        .subscribe(null, () => {}, true)
      tvWidget
        .activeChart()
        .onIntervalChanged()
        .subscribe(null, (interval, timeFrame) => {
          console.log(interval, timeFrame)
        })
      // tvWidget.headerReady().then(() => {
      //   const button = tvWidget.createButton()
      //   button.setAttribute('title', 'Click to show a notification popup')
      //   button.classList.add('apply-common-tooltip')
      //   button.addEventListener('click', () =>
      //     tvWidget.showNoticeDialog({
      //       title: 'Notification',
      //       body: 'TradingView Charting Library API works correctly',
      //       callback: () => {
      //         console.log('Noticed!')
      //       },
      //     })
      //   )
      //   button.innerHTML = 'Check API'
      // })
    })

    return () => {
      tvWidget.remove()
    }
  }, [props])

  return (
    <div
      ref={chartContainerRef}
      className={classNames(' flex-1 p-[1px] h-full max-h-full ')}
    />
  )
}
