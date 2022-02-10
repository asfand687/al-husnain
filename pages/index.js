import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components-new/Navbar/Navbar'
import OurCourses from '../components/OurCourses'
import RegisterYourself from '../components/RegisterYourself'
import WhyUs from '../components/WhyUs'
import Header from '../container/Header/Header'
import AboutUs from '../container/AboutUs/AboutUs'
import SpecialMenu from '../container/Menu/SpecialMenu'
import Chef from '../container/Chef/Chef'
import Intro from '../container/Intro/Intro'
import Laurels from '../container/Laurels/Laurels'
import Gallery from '../container/Gallery/Gallery'

export default function Home() {
	return (
		<div className='text-white'>
			<Head>
				<title>Al Husnain</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar />
				<Header />
				<AboutUs />
				<SpecialMenu />
				<Chef />
				<Intro />
				<Laurels />
				<Gallery />
			</main>
		</div>
	)
}
