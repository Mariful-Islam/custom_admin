import React, {useState, useEffect} from 'react'
import { NavLink, useNavigation } from 'react-router-dom'
import axios from 'axios'


const Navbar = () => {
    let [serviceTables, setServiceTables] = useState([])

    let getServiceTables=()=>{
        axios.get(`/dev_admin/saaddev_tables/`)
        .then((res)=>setServiceTables(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getServiceTables()
    }, [])

    let [ecomTables, setEcomTables] = useState([])

    let getEcomTables=()=>{
        axios.get(`/dev_admin/ecom_tables/`)
        .then((res)=>setEcomTables(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getEcomTables()
    }, [])

  return (
    <div className='nav'>
        <div className='navbar'>
            <h2>Saaddev</h2>
            {serviceTables.map((table)=>(
                <NavLink to={`/saaddev/${table}`}>{table}</NavLink>
            ))}
            <h2>Ecom</h2>
            {ecomTables.map((table)=>(
                <NavLink to={`/ecom/${table}`}>{table}</NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar