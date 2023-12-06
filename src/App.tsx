import React from 'react';

import { FaYoutube } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

function App() {
  return (
    <div className='w-full h-screen bg-[#1C1646] flex flex-col items-center justify-center gap-6 relative '>
      <div className='w-[100%] h-[60px] bg-[#141031] flex items-center gap-3 justify-center absolute top-0 ' >
        <a href='https://discord.gg/wPaSEaeZ3a' target='_blank' className='hover:scale-110 ease-in-out duration-100  ' rel="noreferrer" >
          <BsDiscord size={30} color='#FFF' />
        </a>

        <a href='https://www.instagram.com/vnxrpoficial/' target='_blank' className='hover:scale-110 ease-in-out duration-100  ' rel="noreferrer" >
          <RiInstagramFill size={30} color='#FFF' />
        </a>

        <a href='https://www.youtube.com/channel/UCZXnuo8-aant_TtCH0yKHAg' target='_blank' className='hover:scale-110 ease-in-out duration-100  ' rel="noreferrer" >
          <FaYoutube size={30} color='#FFF' />
        </a>
      </div>



      <div className='max-w-[400px] max-h-[400px] relative  ' >
        <img
          alt='VNX logo'
          src={require("./assets/vnx-logo-no-background.png")}
          className='fixed transition-all duration-200 animate-ping delay-300 w-[340px]  '
        />
        <img
          alt='VNX logo'
          src={require("./assets/vnx-logo-no-background.png")}
          className='-animate-ping w-[340px]  '
        />
      </div>




      {/* <p className='text-[40px] text-primary font-extrabold font-aldrich  flex items-baseline gap-2' >
          VNX <span className='text-[15px]' >Roleplay</span>
        </p> */}
      {/* </div> */}

      {/* <p className='text-[14px] text-white font-bold' >
        Your fun is our priority!!!
      </p>

      <p className='text-white  ' >
        Shortly!!!
      </p>

      <div className='flex gap-2  ' >
        <a
          href='https://discord.gg/udZ89N3U2P'
          target='_blank'
          className='w-[130px] h-[40px] bg-primary flex items-center justify-center gap-2 text-[13px] -text-white font-bold uppercase rounded-md hover:scale-105 duration-100 ease-in-out hover:cursor-pointer ' rel="noreferrer"
        >
          Discord

          <BsDiscord size={20} />
        </a>
      </div> */}

      <div className='w-full fixed bottom-3 text-[12px] text-white text-center flex flex-col items-center justify-center ' >
        &copy; 2022 - 2023 VNX RP. Todos os direitos reservados
        <br />
        O VNX RP não é afiliado a Rockstar Games, Inc.
      </div>

    </div>
  );
}

export default App;
