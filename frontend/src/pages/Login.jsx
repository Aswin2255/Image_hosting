import React, { useEffect } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import instance from '../Axios'
import Cards from '../components/Cards'
import { checkuser, registeruser } from '../redux/Slice'

function Login() {
    const [emailvalid,setemailvalid] = useState(true)
    const [passvalid,setpassvalid] = useState(true)
    const disp = useDispatch()
    const navigate = useNavigate()
    const initialstate = {
        email:'',
        pass:''
    }
    const generateerror = (err)=>{
        toast.error(err,{
          position:"top-center"
        })
      }
    const reducer = (state,action)=>{
        switch (action.type) {
            case 'handelinput':
                return{
                   ...state,
                   [action.field]:action.payload
                }
                  default:
                return state;
        }
    }
    const handlechange = (e)=>{
        dispatch({
            type:'handelinput',
            field:e.target.name,
            payload:e.target.value
        })
    }
    const submit = async ()=>{
        if(formstate.email&&formstate.pass){
            let checkemail = formstate.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            setemailvalid(checkemail)
            let checkpass = formstate.pass.length >=4
            setpassvalid(checkpass)
            if(checkemail&&checkpass){
                const {data} = await instance.post('/login',formstate,{withCredentials:true})
                if(data.login){
                    disp(registeruser({
                        type:'user',
                        user:data.user.username
                    }))
                    navigate('/')
                }
                else{
                    generateerror('no user found')
                }
            }
        }
        else{
           generateerror('all fields are required')
        }
    }
    useEffect(()=>{
        disp(checkuser()).then((data)=>{
            console.log(data)
            if(data.payload.status){
                navigate('/')
            }
        })
    },[])
    const[formstate,dispatch] = useReducer(reducer,initialstate)
  return (
    <div className='h-screen flex items-center'>
        <div className='max-w-md mx-auto grow '>
        <h1 className='text-6xl mb-4  text-gray-400  text-center justify-center m-4'>Login</h1>
            <Cards>
                <div>
                <input  className="block w-full p-2.5  mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the email' value={formstate.email} name = 'email' onChange={(e)=>handlechange(e)}   type='text'></input>
                {
                 !emailvalid   ?  <label className='text-red-700'>Invalid email</label> : ''
                }
                </div>
                <div>
                <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.password} name = 'pass' onChange={(e)=>handlechange(e)}   type='password'></input>
                {
                 !passvalid   ?  <label className='text-red-700'>password less than 4 characters</label> : ''
                }
                </div>
                <div>
                <button className='bg-socialblue text-white px-6 py-1 rounded-md m-3' onClick={submit}>Login</button>
                </div>
              
                <div className='grow text-right'>
                        <Link to={'/signup'} className = 'font-semibold underline'>Create an account</Link>
                    </div>
                
            </Cards>
            <ToastContainer/>
        </div>
      
    </div>
  )
}

export default Login
