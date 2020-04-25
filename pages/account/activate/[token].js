import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';

export default () => {
     const router = useRouter()

     if (!router.query.token) return <Layout><h1>Not working</h1></Layout>

     return <Layout><h1>{router.query.token}</h1></Layout>
}