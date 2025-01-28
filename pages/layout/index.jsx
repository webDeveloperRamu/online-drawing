// components/Layout.js
import React from 'react'
import Head from 'next/head'
import Header from '../componets/header'
import Footer from '../componets/footer'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A description of your app" />
      </Head>
      
      <header><Header /></header>

      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer><Footer /></footer>
    </>
  )
}

export default Layout
