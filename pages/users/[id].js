import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page({ url }) {
  const router = useRouter()

  React.useEffect(() => {
    console.log('Component Did Mount!')
    console.log(router)
  }, [])

  return (
      <div>
         <Link href="/">
            <a>Go Back</a>
        </Link>

        <div>User {url.query.id} </div>

      </div>
  )
}
