import React, { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "OnlineBaithak",
  description: "An Indian online video confercing app",
  icons:{
    icon:'/icons/logo.svg'
  }
};
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
