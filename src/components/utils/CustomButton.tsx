'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

type Props = {
    btname: Number | string;
    onClick?: any;
}

type getData = {
    id: number;
    name: string;
    image : string[];
}

const CustomButton = ({btname, onClick}: Props) => {

    const [data, setData] = useState<getData>();


    const getData = async()=>{
     const res = await axios .get("https://jsonplaceholder.typicode.com/todos/1");
     console.log(res.data)
     setData(res.data)
    }

     useEffect(()=>{
         getData();
     },[])
    

  return (
    <div>
        <button onClick={onClick} className='bg-blue-400 rounded px-2 py-1'>
            {btname as string}
        </button>
    </div>
  )
}

export default CustomButton