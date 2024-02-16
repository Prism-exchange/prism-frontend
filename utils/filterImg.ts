export const filterImgSrc = (token: string): string => {
  if(token){
    switch (token.toLocaleUpperCase()) {
      // USDT
      case '0x1000137ca8C63c5A7560809D06b6a59ce4d9b9d9'.toLocaleUpperCase():
        return '/token/usdt.png'
      case 'pUSDT':
        return '/token/usdt.png'
      // BTC:
      case '0x3a755cd27406f93f40A786Cb46893D83D7F62509'.toLocaleUpperCase():
        return '/token/btc.png'
      case 'pBTC':
        return '/token/btc.png'
      // PRISM
      case '0xfdeBC0575697632e9e4A3153e83CBCCc3AA7939d'.toLocaleUpperCase():
        return '/icon.jpg'
      case 'PRSIM':
        return '/icon.jpg'
      // WETH
      case '0x4200000000000000000000000000000000000023'.toLocaleUpperCase():
        return '/token/eth.png'
      case 'PRSIM':
        return '/token/eth.png'
  
      default:
        return '/token/question.png'
    }
  }
  return '/token/question.png'

}
