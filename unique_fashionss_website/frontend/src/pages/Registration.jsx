import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"
import google from '../assets/google.png'
import { IoEye } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from '../context/UserContext';

function Registration() {
    let [show, setShow] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let {userdata, getCurrentUser} = useContext(userDataContext)
    let navigate = useNavigate()
     
    const handleSignup = async (e) => {
        e.preventDefault()
        try{
            const result = await axios.post(serverUrl+'/api/auth/registration',{
                name,email,password                
            },{withCredentials : true})
             getCurrentUser()
             navigate("/")
            console.log(result.data)
             

        }catch(error){
            console.log(error)
        }
    }
    const googleSignup = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            let user = response.user;
            let name = user.displayName;
            let email = user.email;

            const result = await axios.post(serverUrl + "/api/auth/googleLogin",{
                name,email              
            },{withCredentials : true})
                console.log(result.data)
                getCurrentUser()  
                navigate("/")
            
        } catch (error) {
            console.log("Error during Google signup:", error);
        }
    };
    return (
        <div className="relative isolate w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#071A14] via-[#102820] to-[#04110D] text-white flex flex-col items-center justify-center">
            <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate("/")}>
                <img className='w-[100px]' src={Logo} alt="" />
                <h1 className='text-[22px] font-sans'>UniqueFashionss</h1>
            </div>
            <div className='w-full flex flex-col items-center -translate-y-5'>
                <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
                    <span className='text-[25px] font-semibold'>Registration Page</span>
                    <span className='text-[16px]'>Welcome to UniqueFashionss, Place your order</span>
                </div>
                <div className='max-w-[600px] w-[90%] h-[450px] bg-[#00000025] border border-[#D6B56D] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
                    <form action="" onSubmit={handleSignup} className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]">
                    <div className='w-[90%] h-[50px] bg-[#102820] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
                        <img src={google} alt="" className='w-[20px]' /> Registration with Google
                    </div>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                        <div className='w-[40%] h-[1px] bg-[#D6B56D]'></div> OR <div className='w-[40%] h-[1px] bg-[#D6B56D]'></div>

                    </div>
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                        <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#D6B56D]/50 backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='UserName' required onChange={(e)=>setName(e.target.value)} value={name} />
                        <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#D6B56D]/50 backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <div className='relative w-[100%]'>
                            <input type={show ? "text" : "password"} className='w-[100%] h-[50px] border-[2px] border-[#D6B56D]/50 backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] pr-[50px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password} />
                            {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2' onClick={() => setShow(prev => !prev)} />}
                            {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2' onClick={() => setShow(prev => !prev)} />}
                        </div>
                        <button className='w-[100%] h-[50px] bg-[#005238] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold' >Create Account </button>
                        <p className='flex gap-[10px]'>Already have an account?<span className='text-[#D6B56D] text-[17px] font semibold cursor-pointer' onClick={() => navigate("/login")}>Login</span></p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration