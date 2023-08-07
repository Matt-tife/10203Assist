"use client"

import { SessionProvider } from "next-auth/react"

// The provider function ensures that all the 
// pages in the layout have access to the session
// i.e i want all the pages to know if users is signed in or not
// so in the layout file, the body is wrapped with the provider

const Provider = ({ children, session }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider> 
  )
}

export default Provider