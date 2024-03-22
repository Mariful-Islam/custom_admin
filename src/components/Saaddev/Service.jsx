import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Table from './Table'



const Service = () => {
  let navigate = useNavigate()
  let [services, setServices] = useState([])

    let getServices= async()=>{
        await axios.get(`/dev_admin/services/`)
        .then((res)=>setServices(res.data.results))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getServices()
    }, [])

  return (
    <div>
      <div className='wrapper'>
        {/* <strong className='heading'>Service</strong> */}
        <h1>Service</h1>
        {/* <button className='add' onClick={()=>navigate('/saaddev/service/add')}>+   Add Service</button> */}
        <button onClick={()=>navigate('/saaddev/service/add')} className='add'>+Add Service</button>
        
        <div className='table'>
          <div className='table_head'>
            <strong>id</strong>
            <strong>name</strong>
            <strong>Description</strong>
            <strong>Operation</strong>
          </div>
          <div>
            {services.map((service)=>(
              <Table service={service} key={service.id} getServices={getServices}/>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Service