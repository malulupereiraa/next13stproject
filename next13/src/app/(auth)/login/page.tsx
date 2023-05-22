import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/dashboard">Go to System</Link>
    </div>
  )
}
