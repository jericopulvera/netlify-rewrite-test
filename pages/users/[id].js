
import Link from 'next/link'

export default function Page({ url }) {
  return (
      <div>
         <Link href="/">
            <a>Go Back</a>
        </Link>

        <div>User {url.query.id} </div>

      </div>
  )
}
