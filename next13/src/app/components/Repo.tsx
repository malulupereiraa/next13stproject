import React from 'react'

export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 30,
    },
  })
  // const response = await fetch('https://api.github.com/users/diego3g', {
  //   cache: 'force-cache',
  // }) // armazena a informação em cache para todos os usuários

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     cache: 'no-store',
  //   }) // não armazena a informação em cache para todos os usuários SSR
  const repos = await response.json()

  return (
    <div>
      <h1>Repo</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
