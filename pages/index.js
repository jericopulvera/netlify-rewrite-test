import Link from 'next/link'
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <div className="container">
        <Link href="/users/[id]" as="/users/1">
          <a>User 1</a>
        </Link>
        <br/>
        <Link href="/users/[id]" as="/users/2">
          <a>User 2</a>
        </Link>
      </div>
    </Layout>
  )
}
