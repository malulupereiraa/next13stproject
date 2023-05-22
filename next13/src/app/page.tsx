import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hi Next</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Logout</Link>
    </div>
  )
}
