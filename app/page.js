import Image from 'next/image'
// import { Redirect } from 'next/navigation'
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-wrap gap-[50px] flex-col">
      <Header />
      <h3 className='text-5xl '>Assistivteq Home Page</h3>
      <Link className='max-w-20 bg-blue-600 text-center' href="/auth/signin">Go To Signin</Link>
      <Link className='max-w-20 bg-blue-600 text-center' href="/auth/signup">Go To SignUp</Link>
      <Link className='max-w-20 bg-blue-600 text-center' href="/user/dashboard">Go To User Dashboard</Link>
      <Link className='max-w-20 bg-blue-600 text-center' href="/dr/dashboard">Go To Doctor's Dashboard</Link>
      <Link className='max-w-20 bg-blue-600 text-center' href="/admin/signin">Go To Admin Signin</Link>
      <Link className='max-w-20 bg-blue-600 text-center' href="/admin/dashboard">Go To Admin Dashboard</Link>
      <Footer />
    </main>
  )
}
