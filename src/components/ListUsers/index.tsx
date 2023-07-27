"use client";
import { Input, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState, FC } from 'react'
import ListItems from '../ListItems';
import { dataUsers, listUsers } from '@/types';
import Image from 'next/image';
import { baseUrl } from '@/server/baseurl';
import useDataFilter from '@/hooks/useFilterHook';
export interface ListUsersPropsType {
    setDataTags: any
}
const ListUsers: FC<ListUsersPropsType> = ({ setDataTags }) => {


    const getUsers = async () => {
        return (await fetch(`${baseUrl}/users`).then(
            (res) => res.json()
        )) as [];

    }

    const queryKey = ['users'];
    const { data } = useQuery<listUsers[]>(queryKey, getUsers);
    const { filteredData, setFilterSearch } = useDataFilter(data);

    const handleClickCreateTags = (item: any) => {
        setDataTags((prev: any) => [...prev, { name: item.name, descrip: item.detail }])

    }
    return (
        <>

            <ListItems dataList={data}>
                <TextField id="outlined-basic" label="search" variant="outlined" className='w-full' onChange={(e) => setFilterSearch(e.target.value)} />
                <div className='relative'>{filteredData?.map((items: listUsers) => {
                    return (
                        <div key={items.id} className='flex items-center p-3 mb-2 flex-wrap' onClick={() => handleClickCreateTags(items)}>
                            <Image src={items.image} alt={"test"} width={100} height={100} className='rounded-full' />
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

export default ListUsers