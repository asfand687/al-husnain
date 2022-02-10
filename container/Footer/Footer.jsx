import React from 'react'
import Image from 'next/image'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import FooterOverlay from '../../components-new/Footer/FooterOverlay'
import Newsletter from '../../components-new/Footer/Newsletter'
import { images } from '../../constants'

const Footer = () => (
	<div className='app__footer section__padding' id='login'>
		<FooterOverlay />
		<Newsletter />

		<div className='app__footer-links'>
			<div className='app__footer-links_contact'>
				<h1 className='app__footer-headtext'>Contact Us</h1>
				<p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
				<p className='p__opensans'>+1 212-344-1230</p>
				<p className='p__opensans'>+1 212-555-1230</p>
			</div>

			<div className='app__footer-links_logo'>
				<Image src={images.alhasnain} alt='footer_logo' />
				<p className='p__opensans'>
					&quot;The best way to find yourself is to lose yourself in the service
					of others.&quot;
				</p>
				
				<div className='app__footer-links_icons'>
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			
		</div>

		<div className='footer__copyright'>
			<p className='p__opensans'>2022 Alhasnain. All Rights reserved.</p>
		</div>
	</div>
)

export default Footer
