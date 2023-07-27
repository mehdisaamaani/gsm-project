import React, { FC, SetStateAction, useEffect, useState } from 'react'
import ListItems from '../ListItems'
import { TextField } from '@mui/material'
import { listUsers } from '@/types'
import useTagsData from '@/hooks/useLogicTagHook'
export interface Tagnames {
    dataTags: listUsers[],
    dataDescription: listUsers[],
    setDataTags: React.Dispatch<SetStateAction<listUsers[]>>
    setDataDescription: React.Dispatch<SetStateAction<listUsers[]>>
}
const Tagnames: FC<Tagnames> = ({ dataTags, dataDescription }) => {
    const {
        dataFilterTagNew,
        dataFilterTagNewDescription,
        handleClickRemoveTags,
        handleRemoveDescriptionTags,
    } = useTagsData(dataTags, dataDescription);
    return (
        <ListItems dataList={[]}>

            <div className='flex flex-wrap '>
                <h3>users data :</h3>
                {dataFilterTagNew?.map((tag: any, index: number) => {
                    return (<div className='flex bg-blue-500  p-2 text-white m-2 rounded-md items-start min-h-100 overflow-auto max-h-300 h-100 max-h-full md:max-h-screen lg:max-h-screen overflow-auto' onClick={() => handleClickRemoveTags(index)}>{tag.name}</div>)
                })}
            </div>
            <div className='flex flex-wrap'>
                <h3>description data:</h3>
                {dataFilterTagNewDescription?.map((tag: any, index: number) => {
                    return (<div className='flex bg-blue-500  p-2 text-white m-2 rounded-md items-start' onClick={() => handleRemoveDescriptionTags(index)}>{tag.name}</div>)
                })}
            </div>
        </ListItems>
    )
}

export default Tagnames