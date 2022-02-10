import Head from 'next/head'
import Navbar from '../components-new/Navbar/Navbar'
import Header from '../container/Header/Header'
import AboutUs from '../container/AboutUs/AboutUs'
import SpecialMenu from '../container/Menu/SpecialMenu'
import Chef from '../container/Chef/Chef'
import Intro from '../container/Intro/Intro'
import Laurels from '../container/Laurels/Laurels'
import Gallery from '../container/Gallery/Gallery'
import Footer from '../container/Footer/Footer'

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
				<Laurels />
				<Gallery />
				<Footer/>
			</main>
		</div>
	)
}
