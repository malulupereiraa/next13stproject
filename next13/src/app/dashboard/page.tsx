import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Go Back Home</Link>
      <Link
        href={{
          pathname: 'products/[id]',
          query: {
            id: 1,
          },
        }}
        as={`products/${1}`}
      >
        Go to Products
      </Link>
      <Link href="/login">Logout</Link>
    </div>
  )
}
