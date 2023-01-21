import React from 'react'
import { useState } from 'react'
import Cards from './Cards'

function Createimage() {
    const [showimage,setshowimage] = useState(false)
    const[imgupload,setimageupload] = useState(false)
    const [desc,setdesc] = useState('')
    const [image,setimage] = useState('')
    const handelchange = (e)=>{
        if(e.target.files[0]){
        console.log('file chnaged')
        console.log(e.target.files)
        setshowimage(URL.createObjectURL(e.target.files[0]))
        setimageupload(!imgupload)
        setimage(e.target.files)
        }
        else{
            setimageupload(false)
            setshowimage(false)
        }
    }
    const submit = ()=>{
        if(desc){

        }
        else{
            alert('description cannote be empty')
        }
    }
  
  return (
    <div className='md:flex gap-3 place-content-center mt-5'>
      <Cards>
            <div className='flex gap-3 items-center'>
               

                <textarea name='post' value={desc} onChange = {(e)=>{setdesc(e.target.value)}} className='grow p-3 h-14' placeholder={`whats on your mind..`} />
            </div>
            <div className='flex gap-5 items-center mt-2'>
            
                  
            <div>
                   <input onChange={handelchange}  type='file'></input>
                </div>
                <div>

                </div>


                <div className='grow text-right'>
                  {
                     imgupload ? <button onClick={submit}  className='bg-socialblue text-white  md:px-6 py-1 rounded-md'>Share</button> : <button  className='bg-socialbg text-gray-600  md:px-6 py-1 rounded-md disabled:opacity-75'disabled>Share</button>
                  }  
                </div>
                
             </div>

        </Cards>
        <div>
            {
                showimage ?       <img className='h-24 w-24' src={showimage} alt = 'img'></img> : ''
            }
          
        </div>
    </div>
  )
}

export default Createimage
