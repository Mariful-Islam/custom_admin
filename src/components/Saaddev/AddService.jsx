import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const AddService = () => {

  let navigate = useNavigate()
  
  let [image, setImage] = useState('')
  let [desc, setDesc] = useState([])

  let addHandler = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("name", e.target.name.value)
    formData.append("image", image)
    formData.append("description", desc)
    axios.post('/dev_admin/services/', formData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navigate('/saaddev/service')
  }

  return (
    <div>
      <h1>Add Service</h1>
        <form method='POST' onSubmit={(e)=>addHandler(e)}>
            <input type='text' placeholder='name' name='name'/>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, text ) => {
                        setDesc(text.getData())
                    } }
                    

                    
                />

            <input type='submit' value='Add' />
        </form>
    </div>
  )
}

export default AddService