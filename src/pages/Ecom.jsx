import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { tab } from '@testing-library/user-event/dist/tab'




const Ecom = () => {
  let [tables, setTables] = useState([])

    let getTables=()=>{
        axios.get(`/dev_admin/ecom_tables/`)
        .then((res)=>setTables(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getTables()
    }, [])

  return (
    <div className='ecom'>
      <div className='wrapper'>
        <div className='tables'>
          <oi>
            {tables.map((table)=>(
              <li>{table}</li>
            ))}
          </oi>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Ecom