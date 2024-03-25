
import Logo from '../Images/nav_logo.png'
import LogoText from '../Images/nav_text.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import  './Sidebar.css'
import { useState } from 'react'

const Sidebar = () => {
    let [active, setActive] = useState(0)
  return (
    <>
        <div className="Sidebar flex-col relative pt-16 transition ease-in-out delay-300">
            <div className="logo flex justify-center">
                <img className='' src={Logo} alt="" />
                <img className='' src={LogoText} alt="" />
            </div>

            <div className="menu flex-col mt-16 gap-8">
            {SidebarData.map((item,index)=>{
            return <div key={index} className={`menuItem flex ml-4 items-center rounded-lg mt-8 gap-3 text-lg transition ease-linear duration-300 hover:cursor-pointer p-2 ${active===index ? "active":""}`} onClick={()=>{setActive(index)}} >
                    <item.icon className="f float-left "/>
                    <span>
                        {item.heading}
                    </span>
                    </div>
                    })}
                </div>

            <div className={`menuItem flex items-center mt-32 gap-3 rounded-r-lg text-lg hover:cursor-pointer p-2  ${active===active ? "active":""}`}>
                <UilSignOutAlt size="30"/>
                <span className=''>
                    Sign Out
                </span>
            </div>
            
            </div>
    </>
  )
}

export default Sidebar
