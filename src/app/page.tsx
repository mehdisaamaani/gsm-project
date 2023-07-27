"use client";
import React,{useState} from 'react'
import DescriptionUsers from '@/components/DescriptionUsers';
import RootLayoutComponent from '@/components/LayoutComponent'
import ListUsers from '@/components/ListUsers';
import Tagnames from '@/components/TagResult';
import Image from 'next/image'
import { lazy, Suspense } from 'react';
import { listUsers } from '@/types';
export default function Home() {
  const [dataTags,setDataTags] = useState<listUsers[]>([])
  const [dataDescription,setDataDescription] = useState<listUsers[]>([])
  
  return (
 <RootLayoutComponent >
  <ListUsers setDataTags={setDataTags} />
  <DescriptionUsers setDataDescription={setDataDescription}/>
  <Tagnames dataTags={dataTags} dataDescription={dataDescription} setDataTags={setDataTags} setDataDescription={setDataDescription}/>
 </RootLayoutComponent>
  )
}
