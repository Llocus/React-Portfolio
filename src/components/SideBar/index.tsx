import './SideBar.scss'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import SideBarContent from './SideBarContent';
import { FiMenu } from 'react-icons/fi'

const SideBar = () => {
  const [openBar, setOpenBar] = useState(false)
  const isTabletOrMobile = useMediaQuery({ maxWidth: 915 });
 
 document.addEventListener("DOMContentLoaded", () => {
   // @ts-ignore
    document.querySelector('.PageContent')!.onclick = function (e: Event) {
      console.log(e.target)
      setOpenBar(false)
    }
    
  })

  return (
      <>
      {isTabletOrMobile ? openBar ? <SideBarContent setOpenBar={setOpenBar}/> : <a className='SidebarMenu' onClick={() => {
        setOpenBar(!openBar)
      }}><span><b><FiMenu/></b></span></a> : <SideBarContent/>}
      </>
  );
};

export default SideBar;
