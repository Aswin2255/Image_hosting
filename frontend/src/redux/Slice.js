import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import instance from '../Axios'

export const usersignup = createAsyncThunk('usersignup',async(userdata)=>{
    console.log('reached middle func')
    const response = await instance.post('/signup',userdata,{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})

export const getallimage = createAsyncThunk('getimages',async()=>{
    
    const response = await instance.post('/getallimage',{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const uploadimage = createAsyncThunk('uploadimage',async(imagedata)=>{
    console.log('reached................')
    const response = await instance.post('/uploadimage',imagedata,{withCredentials:true},{ headers: { 'content-Type': 'multipart/form-data' },}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const checkuser = createAsyncThunk('checkuser',async()=>{
    const response = await instance.post('/checkuser',{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})
export const getimgdetails = createAsyncThunk('getdetails',async(id)=>{
    console.log('gggggggggggggggggggggggggggggggggg')
    console.log(id)
    const response = await instance.post(`/getimgdetails/${id}`,{withCredentials:true}).catch((er)=>{
        console.log(er)
    })
    return response.data
})

const initialState = {
    user : '',
    image : [],
    loader:false,
    imgdetail:[]
    
}
const Userslice = createSlice({                             
    name:'user',
    initialState,
    reducers:{
        registeruser : (state,action)=>{
            console.log(state)
            console.log('user present......')
            console.log(action.payload.user)
                state.user = action.payload.user
            
        }
    },
    extraReducers:{
        [getallimage.pending]:(state,{payload})=>{
            return{
                ...state,
                loader:true
            }

        },
        [getallimage.fulfilled]:(state,{payload})=>{
            console.log('get imagee')
            console.log(payload)
            if(payload.status){
                return{
                    ...state,
                    user:payload.currentuser,
                    image:payload.images,
                    loader:false
                }
            }
           else{ return {...state,user:null,image:[]}}
           
        },
      
        [checkuser.fulfilled]:(state,{payload})=>{
            console.log('checkuserkkk')
            console.log(payload)
            if(payload.status){
                return {
                    ...state,
                    user:payload.user
                }
            }
            else{
                return {...state,user:null}
            }
        },
        [uploadimage.fulfilled]:(state,{payload})=>{
            if(payload.status){
                return {
                    ...state,
                    
                }
        }
        else{
            return {
                ...state,user:null
            }
        }
        },
        [getimgdetails.fulfilled]:(state,{payload})=>{
            if(payload.status){
                return{
                    ...state,
                    imgdetail:payload.images,
                    user:payload.currentuser
                }
            }
            else{
                return{
                    ...state,user:null
                }
            }

        }
        
       

    }
})
export  const {registeruser} = Userslice.actions
export const getuser = (state)=>state.user.user
export const getimage = (state)=>state.user.image
export const getloader = (state)=>state.user.loader
export const getdetails = (state)=>state.user.imgdetail 
export default Userslice.reducer
