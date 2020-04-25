import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page({ url }) {
  const router = useRouter()
  const [userId, setUserId] = React.useState('')

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

        <label for="userId">
          User Id
          <input id="userId" value={userId} onChange={e => setUserId(e.target.value)}></input>
        </label>

        <button type="button" onClick={() => router.push(`/users/${userId}`)}>Go to user {userId}</button>
      </div>
  )
}
