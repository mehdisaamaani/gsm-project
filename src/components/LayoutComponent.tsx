import React, { FC } from 'react'


export interface RootLayoutPropsType {
    children: React.ReactNode
}
const RootLayoutComponent: FC<RootLayoutPropsType> = ({ children }) => {
    return (
        <div className='flex  min-h-screen  px-4 pt-8 pb-16'>
  
         <main className='flex  w-full flex-col  md:flex-row sm:flex-col lg:flex-row  lg:grid lg:grid-cols-3 grid-cols-12  md:mb-0 lg:mb-0 mb-3 bg-dark'>{children}</main>
         </div>
   
    )
}

export default RootLayoutComponent