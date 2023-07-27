"use client";
import { useEffect, useState, FC } from "react";
import { listUsers } from "@/types";

type ListItemsProps = {
  dataList: listUsers[] | undefined,
  children: React.ReactNode
}
const ListItems: FC<ListItemsProps> = ({ children }) => {
  const [checkeDataInApiBeforeUseInSSR, setCheckeDataInApiBeforeUseInSSR] = useState<boolean>(false)
  useEffect(() => {
    if (checkeDataInApiBeforeUseInSSR) {
      setCheckeDataInApiBeforeUseInSSR(true)
    }
  }, [])

  if (checkeDataInApiBeforeUseInSSR) {
    return null
  }
  return (
    <div className='flex-col bg-gray-100 flex-1 mr-0 md:mr-3 lg:mr-3 h-screen max-h-full md:max-h-screen lg:max-h-screen overflow-auto p-4 cursor-pointer relative mb-3 md:mb-0 lg:mb-0'>
      {children}
    </div>
  )
}

export default ListItems