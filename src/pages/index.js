import Head from 'next/head'
import Link from 'next/link'
import SEO from 'components/layout/SEO'
import CoverEaseIn from 'components/animations/CoverEaseIn'
import CoverEaseOut from 'components/animations/CoverEaseOut'

export default function Home() {
  return (
    <div className='bg-gray-800 h-full w-full min-h-screen flex'>
      <SEO title='Home page'/>
      <CoverEaseIn/>
      <CoverEaseOut/>
      <div className='flex-auto text-gray-50'>
        <Link href='/more'>Hello word</Link>
      </div>
    </div>
  )
}
