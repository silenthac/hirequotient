import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';

const Welcome = () => {
    const [data, setData] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const handleClick = (key) => {
        setSelectedKey(key);
    };
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('https://canopy-frontend-task.now.sh/api/holdings');
            const jsondata = await response.json();
            setData(jsondata.payload);
            // console.log(jsondata.payload[0])

        }

        fetchData();

    },[])
    
    let groups = {};
    data.forEach(item => {
        if (!groups[item.asset_class]) {
            groups[item.asset_class] = [];
        }
        groups[item.asset_class].push(item);
    });
    const keys = Object.keys(groups);
    
  return (
    
    <div>
        {
            keys.map((key)=>(
                 //console.log({key})
                <div  className=' text-blue-900 font-bold border border-gray-300 p-5 hover:cursor-pointer' onClick={() => handleClick(key)} key={key}>
                {key.toUpperCase()} ({groups?.[key]?.length})  
                {/* when  the array is dynamic use bracket notation */}
                {selectedKey === key && (
                    
                        <Card data = {groups[key]}/>
                    )}
            </div>
            ))
        }

    </div>
    
  )
}

export default Welcome