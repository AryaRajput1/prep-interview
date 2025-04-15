import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'> 
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p className="text-lg text-gray-500">The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Dashboad
      </Link>
    </div>
  )
}
