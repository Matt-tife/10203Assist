import Image from 'next/image'
// import { Redirect } from 'next/navigation'
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Service from '@/components/ServiceSection';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <About />
      <Service />
      <Footer />
    </div>
  )
}
