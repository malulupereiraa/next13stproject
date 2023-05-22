import { Suspense } from 'react'
import { Repo } from '@/app/components/Repo'
import { User } from '@/app/components/User'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

interface ProductProps {
  params: {
    id: string
  }
}

export default async function Product({ params }: ProductProps) {
  // const router = useRouter()
  // router.refresh()
  // useEffect(() => {
  // })

  return (
    <div>
      <h1>Product: {params.id}</h1>
      <Suspense fallback={<p>Carregando User...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User></User>
      </Suspense>
      <Suspense fallback={<p>Carregando Repo...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo></Repo>
      </Suspense>
      <Link href={'dashboard'}>Go back to Dashboard</Link>
    </div>
  )
}
