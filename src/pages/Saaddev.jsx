import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Saaddev = () => {
    let [tables, setTables] = useState([])

    let getTables=()=>{
        axios.get(`/dev_admin/saaddev_tables/`)
        .then((res)=>setTables(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getTables()
    }, [])

  return (
    <div className='saaddev'>
        <div className='wrapper'>
            <div className='table'>
                {tables.map((table)=>(
                    <li>{table}</li>
                ))}
            </div>
            <div>
                    
            </div>
        </div>
    </div>
  )
}

export default Saaddev