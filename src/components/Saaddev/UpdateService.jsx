import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'


import { useNavigate, useParams } from 'react-router-dom'


const UpdateService = () => {
  let {id} = useParams()
  let navigate = useNavigate()
  
  let [image, setImage] = useState('')
  let [desc, setDesc] = useState([])

  let updateHandler = (e) => {
    
    e.preventDefault()
    let formData = new FormData()
    formData.append("name", e.target.name.value)
    formData.append("image", image)
    formData.append("description", desc)
    axios.put('/dev_admin/services/', formData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navigate('/saaddev/service')
  }

  let [service, setService] = useState("")

  let getServices = () => {
    axios.get(`/dev_admin/service/${id}`)
    .then(res=>setService(res.data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getServices()
  },[])



  return (
    <div className='wrapper' >
      <h1>Update Service</h1>
      <button className='add' onClick={()=>navigate('/saaddev/service')} style={{position:'absolute', left:0, top:80, width: 80 }}>← Back</button>
        <form method='POST' onSubmit={(e)=>updateHandler(e)}>
            <input type='text' placeholder='name' name='name' value={service.name}/>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
            <CKEditor
                    editor={ ClassicEditor }
                    data={service.description}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, text ) => {
                        setDesc(text.getData())
                    } }
                    

                    
                />

            <input type='submit' value='Update' />
        </form>
    </div>
  )
}

export default UpdateService