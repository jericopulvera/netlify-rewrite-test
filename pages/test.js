import { useRouter } from 'next/router'


export default () => {
     const router = useRouter()

     if (!router.query.token) return <h1>Not working</h1>

     return <h1>{router.query.token}</h1>
}