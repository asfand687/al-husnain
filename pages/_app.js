import 'tailwindcss/tailwind.css'
import '../public/styles.css'
import '../components-new/Navbar/Navbar.css'
import '../container/Header/Header.css'
import '../container/AboutUs/AboutUs.css'
import '../container/Menu/SpecialMenu.css'
import '../container/Chef/Chef.css'
import '../container/Intro/Intro.css'
import '../container/Laurels/Laurels.css'
import '../container/Gallery/Gallery.css'
import '../container/Footer/Footer.css'
import '../components-new/Footer/FooterOverlay.css'
import '../components-new/Footer/Newsletter.css'

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
