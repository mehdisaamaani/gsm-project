"use client";
import { Input, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React,{FC, SetStateAction, useState} from 'react'
import ListItems from '../ListItems';
import { dataUsers, listUsers } from '@/types';
import Image from 'next/image';
import { baseUrl } from '@/server/baseurl';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useDataFilter from '@/hooks/useFilterHook';
export interface DescriptionUsersPropsType{
    setDataDescription:React.Dispatch<SetStateAction<any[]>>
}
const DescriptionUsers:FC<DescriptionUsersPropsType> = ({setDataDescription}) => {
   
    const getUsers = async () => {
        return (await fetch(`${baseUrl}/letters`).then(
            (res) => res.json()
        )) as [];
    }
    const queryKey = ['letters'];
    const { data } = useQuery<listUsers[]>(queryKey, getUsers);
    const { filteredData, setFilterSearch } = useDataFilter(data);
const handleClickDecriptionData = (item:listUsers)=>{
    setDataDescription((prev:any) =>[...prev,{name:item.name,descrip:item.detail}])
}
    return (
        <>
            <ListItems dataList={data}>
            <TextField id="outlined-basic" label="search" variant="outlined" className='w-full' onChange={(e)=>setFilterSearch(e.target.value)} />
                <div>{filteredData?.map((items: listUsers) => {
                    return (
                        <div key={items.id} className='flex  p-3 mb-2 items-start' onClick={()=>handleClickDecriptionData(items)}>
                           {items.image ? <Image src={items.image} alt={"test"} width={100} height={100} className='rounded-full'/> : <AccountCircleIcon className='text-6xl'/>} 
                            <div className='flex flex-col items-baseline items-center p-3 mb-2  border-b border-gray-300 pb-6 w-full '>
                                <p>{items.name}</p>
                                <p>{items.detail}</p>
                                </div>
                        </div>
                    )
                })}
                </div>
            </ListItems>
        </>
    )
}

export default DescriptionUsers