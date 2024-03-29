
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
            return <div key={index} className={`menuItem flex ml-4 items-center rounded-lg mt-8 gap-2 text-md transition ease-linear duration-300 hover:cursor-pointer p-2 ${active===index ? "active":""}`} onClick={()=>{setActive(index)}} >
                    <span>
                        <item.icon className="f float-left"/>
                    </span>
                    <span>
                        {item.heading}
                    </span>
                    </div>
                    })}
                </div>

            {/* <div className={`menuItem flex items-center mt-32 gap-3 rounded-r-lg text-lg hover:cursor-pointer p-2  ${active===active ? "active":""}`}>
                <UilSignOutAlt size="30"/>
                <span className=''>
                    Sign Out
                </span>
            </div> */}
            <button
                className="py-2 px-4 rounded-xl bg-[#7875fa] hover:bg-white hover:text-[#7875fa] focus:text-[#7875fa] focus:bg-gray-200 focus:border-2 border-black text-gray-50 font-bold leading-loose transition duration-200 flex items-center mt-32 gap-3 m-6">
                    <UilSignOutAlt size="30"/>
                     Sign Out
            </button>

            
            </div>
    </>
  )
}

export default Sidebar
