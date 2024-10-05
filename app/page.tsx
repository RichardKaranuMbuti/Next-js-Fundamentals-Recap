import Image from 'next/image'
import ProductCard from './components/ProductCard/ProductCard'
import UsersPage from './users/page'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <h1>Hello Sir</h1>
    <Link href="/users">users</Link>
    <ProductCard />
    </main>
  )
}
