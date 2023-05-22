'use client'

import { useState } from 'react'
// import { cookies, headers } from 'next/headers'

export async function User() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000))
  //   const response = await fetch('https://api.github.com/users/diego3g', {
  //     next: {
  //       revalidate: 30,
  //     },
  //   })
  // const response = await fetch('https://api.github.com/users/diego3g', {
  //   cache: 'force-cache',
  // }) // armazena a informação em cache para todos os usuários
  //   const response = await fetch('https://api.github.com/users/diego3g', {
  //     cache: 'no-store',
  //   }) // não armazena a informação em cache para todos os usuários SSR
  //   const user = await response.json()

  //   const userCookies = cookies()
  //   const userHeaders = headers()
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>User123</h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(userCookies.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders, null, 2)}</pre> */}
      <h2>Increment: {count}</h2>
      <button onClick={() => setCount((state: number) => state + 1)}>
        Increment
      </button>
    </div>
  )
}
