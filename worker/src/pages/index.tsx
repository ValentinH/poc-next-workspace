import { sayHello } from '@hublo/common/utils/hello'
import HelloWorld from '@hublo/common/ui/HelloWorld'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  React.useEffect(() => {
    console.log('Hello from Worker')
    sayHello()
  }, [])

  return (
    <div>
      <Head>
        <title>Worker app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Worker app</h1>
        <HelloWorld />
      </main>
    </div>
  )
}

export default Home
