import { useContext, useState } from 'react'
import { ContractContext } from '../context/ContratContext'
import MuiModal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'
interface Props {}
import twitter from '../public/images/images/twitter.svg'
const socialMedia = [
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://twitter.com/PrismOnBlast',
  },
]

function ModalWebSiteLoading() {
  const { isLoadingFirstOpenWebsite } = useContext(ContractContext)

  return (
    <MuiModal
      open={isLoadingFirstOpenWebsite}
      // onClose={handleCLose}
      className="relative inset-0  justify-center items-center  
      bg-black
       outline-none "
    >
      <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-10 justify-center items-center mt-40 ">
            <img src="prism.webp" alt="" />
            <div className="font-base font-semibold text-sm xs:text-base">
              loading website data...
            </div>
          </div>
        </div>
        <div className="  text-white  fixed bottom-2 right-3">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="h-6 w-6 cursor-pointer hover:opacity-70"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </>
    </MuiModal>
  )
}

export default ModalWebSiteLoading
