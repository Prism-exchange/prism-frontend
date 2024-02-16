import {
  ConnectButton,
  useAccountModal,
  useChainModal,
  useConnectModal,
} from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from './Loader'
import { ContractContext } from '../context/ContratContext'
import ModalShowNew from './ModalShowNew'
import { WalletIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import MenuDropdown from './MenuDropdown'
import { MainChainID } from '../utils/valueConst'
import { useAccount, useNetwork } from 'wagmi'
import { shortenAddress } from '../utils/shortenAddress'

type Props = {}

function Narbar({}: Props) {
  const { pathname } = useRouter()
  const [isScrolled, setisScrolled] = useState(false)
  const [showNew, setShowNew] = useState(false)

  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()

  useEffect(() => {
    const hadnleScroll = () => {
      if (window.scrollY > 0) {
        setisScrolled(true)
      } else {
        setisScrolled(false)
      }
    }

    window.addEventListener('scroll', hadnleScroll)

    return () => {
      window.removeEventListener('scroll', hadnleScroll)
    }
  }, [])
  return (
    <div className="sticky inset-0 z-20">
      <div
        className={`bg-[#101014] flex flex-row text-base border-b-[1px] border-gray-800 font-semibold items-center justify-between px-5 py-2 transition-all duration-200 ${
          isScrolled && 'bg-[#101014] '
        }`}
      >
        <div className="flex">
          <div className="flex items-center lg:mr-5 gap-2">
            <Image
              alt=""
              src={'/icon.jpg'}
              width={30}
              height={30}
              className=" rounded-full p-[2px] bg-white"
            ></Image>
            <h1 className=" text-xl sm:inline hidden  font-extrabold ">
              Prism
            </h1>
          </div>
          <div className="lg:hidden flex items-center">
            <MenuDropdown></MenuDropdown>
          </div>
          <div className="lg:flex hidden  flex-row items-center gap-2">
            <Link href="/markets">
              <h1
                className={`${
                  pathname === '/markets' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Markets
              </h1>
            </Link>
            <Link
              href="/trade"
              onClick={(e) => {
                if (pathname.includes('/trade') === true) {
                  e.preventDefault()
                }
              }}
            >
              <h1
                className={`${
                  pathname.includes('/trade') === true
                    ? 'Buttonselect'
                    : 'ButtonHover'
                } `}
              >
                Trade
              </h1>
            </Link>
            <Link href="/createpair">
              <h1
                className={`${
                  pathname === '/createpair' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                CreatePair
              </h1>
            </Link>
            <Link href="/fee">
              <h1
                className={`${
                  pathname === '/fee' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Fee
              </h1>
            </Link>
            <Link href="/faucet">
              <h1
                className={`${
                  pathname === '/faucet' ? 'Buttonselect' : 'ButtonHover'
                } `}
              >
                Faucet
              </h1>
            </Link>

            {/* <h1 onClick={() => setShowNew(true)} className={`ButtonHover `}>
              ✨ What's New ✨
            </h1> */}
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Link href="/wallet">
            <h1
              className={`${
                pathname === '/wallet' ? 'Buttonselect' : 'ButtonHover'
              } `}
            >
              <div className="flex items-center gap-1">
                <span>Wallet</span>
                <span>
                  <WalletIcon className="  h-4 w-4 " />
                </span>
              </div>
            </h1>
          </Link>

          {/* <div className="text-[9px] xs:text-sm">
            <ConnectButton
              label="connect wallet"
              accountStatus={{
                smallScreen: 'address',
                largeScreen: 'full',
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              chainStatus={{
                smallScreen: 'icon',
                largeScreen: 'full',
              }}
            />
          </div> */}
          <>
            {openConnectModal && (
              <button className="Buttonpurple" onClick={openConnectModal}>
                Connect wallet
              </button>
            )}

            {openChainModal && (
              <>
                {chain?.id == MainChainID ? (
                  <button
                    className="Buttonpurple flex justify-center items-center gap-1"
                    onClick={openChainModal}
                  >
                    Blast
                    <img
                      src="/blast.png"
                      alt=""
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    />
                    {/* <div className="hidden md:flex">{chain?.name}</div>
                    <Image
                      className="flex md:hidden"
                      src="/blast.png"
                      alt=""
                      width="16"
                      height="16"
                    /> */}
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    className="Buttonred flex justify-center  items-center gap-1"
                    onClick={openChainModal}
                  >
                    Wrong network
                    <ChevronDownIcon className="  h-4 w-4 " />
                  </button>
                )}
              </>
            )}

            {isConnected && openAccountModal && (
              <button
                className="Buttonpurple flex justify-center items-center gap-1
                  text-[8px] xs:text-xs lg:text-sm xl:text-base "
                onClick={openAccountModal}
              >
                {address ? shortenAddress(address) : '-'}
                <ChevronDownIcon className="  h-4 w-4 hidden xs:flex" />
              </button>
            )}
          </>
        </div>
      </div>

      {showNew && <ModalShowNew onClose={() => setShowNew(false)} />}
    </div>
  )
}

export default Narbar
