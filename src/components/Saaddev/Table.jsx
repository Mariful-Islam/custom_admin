import React from 'react'
import edit from '../../assests/edit.svg'
import trash from '../../assests/trash.png'
import axios from 'axios'

const Table = ({service, getServices}) => {

    function createMarkup() {
        return {__html: service.description};
      }
      
    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
      }

    
      let deleteHandle = async (id) => {
    //     axios.delete(`/dev_admin/service/${id}`, {
    //       headers:{
    //           "content-type": "multipart/form-data"
    //       }
    //   })
    //     .then((res)=>console.log(res.data))
    //     .catch(err=>console.log(err))

        let res = await fetch(`/dev_admin/service/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        let data = await res.json()
        getServices()
      }

      let updateHandle = () => {
        console.log('update')
      }

  return (
    <div className='table_row'>
        <p><img style={{height: 30, width:30, borderRadius:'50%', objectFit:'cover', padding:0, margin:0}} 
            src={service.image} alt=''/></p>
        <p>{service.name}</p>
        <p>{MyComponent()}</p>
        <p>
            <img src={edit} alt='' onClick={()=>updateHandle(service.id)}/>
            <img src={trash} alt='' onClick={()=>deleteHandle(service.id)}/>
        </p>
    </div>
  )
}

export default Table