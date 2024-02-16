'use client'

import { useRouter, usePathname } from 'next/navigation'
import { TNavbarMenu } from '../../types'
import Image from 'next/image'
import classNames from 'classnames'

const Nav = () => {
  const router = useRouter()
  const pathName = usePathname()
  const menuList: TNavbarMenu = [
    {
      text: 'TRADE',
      route: '/trade',
    },
    {
      text: 'PORTFOLIO',
      route: '/portfolio',
    },
    {
      text: 'EVENTS',
      route: '/events',
    },
    {
      text: 'BOARD',
      route: '/board',
    },
    {
      text: 'MORE',
      route: '/more',
    },
  ]
  return (
    <div className="flex items-center justify-between py-2 px-2  border-b border-slate-400 h-[50px]  ">
      <div className=" flex gap-x-2  ">
        <Image
          alt=""
          src={'/icon.jpg'}
          width={30}
          height={30}
          className=" rounded-full p-[2px] bg-white"
        ></Image>
        {menuList.map((x, y) => {
          return (
            <div
              key={`menuList-${x.text}-${y}`}
              className={classNames(
                ' flex justify-center items-center text-center text-header cursor-pointer py-[2px] px-[4px] rounded-lg ',
                x.route === pathName ? ' bg-slate-800 ' : ''
              )}
              onClick={() => router.push(x.route)}
            >
              {x.text}
            </div>
          )
        })}
      </div>
      <div className=" p-[4px] bg-slate-800 text-header rounded-lg">Wallet</div>
    </div>
  )
}

export default Nav
