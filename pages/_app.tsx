import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import {} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import '@rainbow-me/rainbowkit/styles.css'
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { Chain } from '@rainbow-me/rainbowkit'
import { ContractProvider } from '../context/ContratContext'
import Narbar from '../components/Narbar'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InjectMiddleware from '../components/InjectMiddleware'
import ChatGlobal from '../components/ChatGlobal'

const customBlast: Chain = {
  id: 168587773,
  name: 'Blast Sepolia',
  network: 'Blast Sepolia',
  iconUrl: 'blast.png',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.blast.io'],
    },
  },
  blockExplorers: {
    default: { name: 'blastscan', url: 'https://testnet.blastscan.io' },
  },
  testnet: true,
}

const { chains, provider } = configureChains(
  [customBlast],
  [
    alchemyProvider({ apiKey: '' }),
    infuraProvider({ apiKey: '' }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My app',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContractProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          coolMode
          chains={chains}
          theme={lightTheme({
            accentColorForeground: 'black',
            overlayBlur: 'large',
            accentColor: 'white',
          })}
        >
          <Narbar />
          <Component {...pageProps} />
          <div className="h-8"></div>
          {/* <ChatGlobal /> */}
          <Footer />
          <InjectMiddleware />
          {/* <Toaster
          position='bottom-right'
          /> */}
          <ToastContainer
            position="top-right"
            className="!top-14"
            theme="dark"
            hideProgressBar={false}
          />
        </RainbowKitProvider>
      </WagmiConfig>
    </ContractProvider>
  )
}

export default MyApp
