import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import instance from '../Axios'
import Cards from '../components/Cards'

function Signup() {
    const [emailvalid,setemailvalid] = useState(true)
    const [usernamevalid,setusernamevalid] = useState(true)
    const [passvalid,setpassvalid] = useState(true)
    const[cpass,setcpass] = useState(true)
    const initialstate = {
        username:'',
        email:'',
        pass:'',
        cpass:''
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case 'handelinput':
                return {
                    ...state,
                    [action.field]:action.payload
                }
        
            default:
                return state
        }
    }
    const generateerror = (err)=>{
        toast.error(err,{
          position:"top-center"
        })
      }
    const handlechange = (e)=>{
        dispatch({
            type:'handelinput',
             field:e.target.name,
             payload:e.target.value
        })

    }
    const submit = async ()=>{
        if(formstate.username&&formstate.email&&formstate.pass){
            let emailcheck = formstate.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            setemailvalid(emailcheck)
            let usernamecheck = formstate.username.match(/^[a-zA-Z-]+$/);
            setusernamevalid(usernamecheck)
            let passcheck = formstate.pass.length >=4
            setpassvalid(passvalid)
            let passmatch = formstate.pass === formstate.cpass
            setcpass(passmatch)
            if(usernamecheck&&emailcheck&&passvalid&&passcheck){
               
            }

        }
        else{
            generateerror('all fields required')
        }
        
    }
    const[formstate,dispatch] = useReducer(reducer,initialstate)
    
  return (
    <div className='h-screen flex items-center'>
    <div className='max-w-md mx-auto grow '>
      
   
        <Cards>
        <h1 className='text-5xl mb-4  text-gray-400  text-center justify-center '>Signup</h1>
        <div>
            <input  className="block w-full p-2.5 mb-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the Name' value={formstate.name} name = 'username' onChange={(e)=>handlechange(e)}  type='text'></input>    
            {
                  !usernamevalid   ?  <label className='text-red-700'>Invalid username</label> : ''
                }
                
            </div>
            <div>
              
            <input  className="block w-full p-2.5  mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder='Enter the email' value={formstate.email} name = 'email' onChange={(e)=>handlechange(e)}   type='text'></input>
            {
                  !emailvalid   ?  <label className='text-red-700'>  Invalid Email address</label> : ''
                }
            </div>
            <div>
            <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.password} name = 'pass' onChange={(e)=>handlechange(e)}   type='password'></input>
            {
                  !passvalid   ?  <label className='text-red-700'>password is less than 4 characters</label> : ''
                }
            </div>
            <div>
            <input className="block w-full p-2.5 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Enter the password' value={formstate.cpass} name = 'cpass' onChange={(e)=>handlechange(e)}   type='password'></input>
            {
                  !cpass   ?  <label className='text-red-700'>password doesn't match</label> : ''
                }
            </div>
            <div className='flex gap-4 items-center justify-center m-4'>
            <button className='bg-socialblue text-white px-6 py-1 rounded-md' onClick={submit}>Signup</button>
            </div>
           
            
        </Cards>
        <ToastContainer/>
    </div>
  
</div>
  )
}

export default Signup
