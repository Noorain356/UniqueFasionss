import Logo from "../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import { RiSearchFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { IoHomeOutline } from "react-icons/io5";

function Nav() {
    let {setUserData, userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let [showSearch, setShowSearch] = useState(false)
    let [showProfile, setShowProfile] = useState(false)
    let navigate = useNavigate()
    
    const handleLogOut = async () => {
        try{
           const result = await axios.post(serverUrl + "/api/auth/logout",{ withCredentials: true})
           console.log(result.data)
           setUserData()
           setShowProfile(false)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='w-[100vw] h-[80px] bg-[#FCFBF4] z-10 fixed top-0 flex items-center justify-between px-[1px] md:px-[30px] shadow-md shadow-[#D6B56D] '>
            
            <div className='-ml-[2px] flex items-center justify-start gap-[4px] md:ml-0 md:gap-[10px]'> <img src={Logo} alt="" className='w-[68px] shrink-0 object-contain md:w-[100px] items-center'/>
                <h1 className='text-[22px] md:text-[35px] text-[#806044] font-[Poppins] font-semibold'>UniqueFashionss</h1>
            

            </div>
            <div className='w-[40%] hidden md:flex'>
                <ul className="flex items-center justify-start gap-[20px] text-[#FCFBF4]">

                    <li className="text-[15px] cursor-pointer bg-[#1A4331] border border-[#C9A227] py-[10px] px-[20px] rounded-2xl transition-all duration-300 hover:bg-[#C9A227] hover:text-[#1A4331]">
                        HOME
                    </li>
                    <li className="text-[15px] cursor-pointer bg-[#1A4331] border border-[#C9A227] py-[10px] px-[20px] rounded-2xl transition-all duration-300 hover:bg-[#C9A227] hover:text-[#1A4331]">
                        COLLECTIONS
                    </li>
                    <li className="text-[15px] cursor-pointer bg-[#1A4331] border border-[#C9A227] py-[10px] px-[20px] rounded-2xl transition-all duration-300 hover:bg-[#C9A227] hover:text-[#1A4331]">
                        ABOUT
                    </li>
                    <li className="text-[15px] cursor-pointer bg-[#1A4331] border border-[#C9A227] py-[10px] px-[20px] rounded-2xl transition-all duration-300 hover:bg-[#C9A227] hover:text-[#1A4331]">
                        CONTACT
                    </li>

                </ul>
            </div>
            <div className=" flex items-center justify-end gap-[10px] md:gap-[20px]">
                {!showSearch && <CiSearch className='w-[28px] h-[28px] md:w-[38px] md:h-[38px] text-[#000000] cursor-pointer' onClick={() =>setShowSearch(prev=>!prev)}/>}
                     {showSearch && <RiSearchFill className='w-[28px] h-[28px] md:w-[38px] md:h-[38px] text-[#000000] cursor-pointer' onClick={() =>setShowSearch(prev=>!prev)}/>}
                {!userData && <CiUser className='relative left-[-2px] w-[28px] h-[28px] md:left-0 md:w-[38px] md:h-[38px] text-[#000000] cursor-pointer' onClick={() =>setShowProfile(prev=>!prev)}/>}
                {userData && <div className='relative left-[-2px] w-[28px] h-[25px] md:left-0 md:w-[30px] md:h-[30px] bg-[#080808] text-[white] rounded-full items-center justify-center flex cursor-pointer' onClick={() =>setShowProfile(prev=>!prev)}>
                    {userData?.name.slice(0,1)}
                </div>}
                <CiShoppingCart className='w-[38px] h-[38px] text-[#000000] cursor-pointer hidden md:block'/>
                <p className='absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[15px] right-[23px] hidden'>10</p>
            </div>
            {showSearch &&  <div className='w-[100%] h-[80px] bg-[#789B83] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
                <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Search Here'/>
            </div>}
            {showProfile && <div className='absolute w-[220px] bg-[#000000d7] top-[100%] mt-[10px] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10 overflow-hidden'>
            <ul className='w-[100%] flex items-start justify-start flex-col text-[17px] text-[white]'>
              {!userData && <li className='w-[100%] hover:bg-[#2f2f2f] hover:rounded-[10px] px-[15px] py-[10px] cursor-pointer' onClick={()=>{ navigate("/login");
              setShowProfile(false)
              }}>Login</li> }
              {userData && <li className='w-[100%] hover:bg-[#2f2f2f] hover:rounded-[10px] px-[15px] py-[10px] cursor-pointer' onClick={() => {
                handleLogOut();
                setShowProfile(false)
              }}>LogOut</li>}
                <li className='w-[100%] hover:bg-[#2f2f2f] hover:rounded-[10px] px-[15px] py-[10px] cursor-pointer'>Orders</li>
               <li className='w-[100%] hover:bg-[#2f2f2f] hover:rounded-[10px] px-[15px] py-[10px] cursor-pointer'>About</li>

            </ul>
            </div>}
            <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 bg-[#191818] md:hidden'>
               <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><IoHomeOutline className='w-[30px] text-[white] md:hidden' />Home</button>
                <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><IoHomeOutline className='w-[30px] text-[white] md:hidden' />Home</button>
                 <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><IoHomeOutline className='w-[30px] text-[white] md:hidden' />Home</button>
                  <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'><IoHomeOutline className='w-[30px] text-[white] md:hidden' />Home</button>
            </div>

        </div>
    )
}
export default Nav