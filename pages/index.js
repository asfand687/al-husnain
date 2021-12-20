import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import OurCourses from '../components/OurCourses'
import RegisterYourself from '../components/RegisterYourself'

export default function Home() {
	return (
		<div className='text-white'>
			<Head>
				<title>Al Husnain</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className='w-screen bg-[#4C956C]'>
				<Navbar />
				<Hero />
			</header>
			<OurCourses />
			<RegisterYourself />
			<Footer />
		</div>
	)
}
