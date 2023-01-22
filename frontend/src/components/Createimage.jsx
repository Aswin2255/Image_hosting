import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallimage, getuser, uploadimage } from '../redux/Slice'
import Cards from './Cards'

function Createimage() {

  const [showimage, setshowimage] = useState(false)
  const [imgupload, setimageupload] = useState(false)
  const aref = useRef(null)
  const [ref, setref] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(getuser)

  const [image, setimage] = useState('')
  const handelchange = (e) => {
    if (e.target.files[0]) {
      console.log('file chnaged')
      console.log(e.target.files)
      setshowimage(URL.createObjectURL(e.target.files[0]))
      setimageupload(true)
      setimage(e.target.files[0])

    }
    else {
      setimageupload(false)
      setshowimage(false)
    }
  }

  const submit = (e) => {

    e.preventDefault()
    console.log(image)
    const formdata = new FormData()

    formdata.append('images', image)

    console.log(...formdata)
    console.log('-----------')
    console.log(aref.current.files)
    aref.current.value = null



    dispatch(uploadimage(formdata)).then((data) => {

      setref(!ref)

      setimageupload(false)
      setshowimage(false)

    })
   
  }
   useEffect(() => {
      console.log('worked')
      dispatch(getallimage())
  
    }, [ref])
  

  return (
    <div className='md:flex gap-3 place-content-center mt-5'>
      <Cards>
        <form onSubmit={submit}>
          <div className='flex gap-3 items-center'>
            <h1>{`post something ${user}`}</h1>

          </div>
          <div className='flex gap-5 items-center mt-2'>







            <div>
              <input ref={aref} onChange={handelchange} name='f' type='file'></input>
            </div>
            <div>

            </div>


            <div className='grow text-right'>
              {
                imgupload ? <button className='bg-socialblue text-white  md:px-6 py-1 rounded-md'>Share</button> : <button className='bg-socialbg text-gray-600  md:px-6 py-1 rounded-md disabled:opacity-75' disabled>Share</button>
              }
            </div>

          </div>

        </form>

      </Cards>
      <div>
        {
          showimage ? <img className='h-24 w-24' src={showimage} alt='img'></img> : ''
        }

      </div>
    </div>
  )
}

export default Createimage
