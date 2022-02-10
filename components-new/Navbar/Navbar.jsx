import React from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = React.useState(false)
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image width={150} height={50} src={images.alhasnain} alt='app-logo' />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'>
					<a href='#home'>Home</a>
				</li>
				<li className='p__opensans'>
					<a href='#about'>About</a>
				</li>

				<li className='p__opensans'>
					<a href='#awards'>Services</a>
				</li>
				<li className='p__opensans'>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='app__navbar-login'>
				<a href='#login' className='p__opensans'>
					Login / Register
				</a>
				<div />
				<a href='/' className='p__opensans'>
					Book Table
				</a>
			</div>
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>
				{toggleMenu && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu
							fontSize={27}
							className='overlay__close'
							onClick={() => setToggleMenu(false)}
						/>
						<ul className='app__navbar-smallscreen_links'>
							<li>
								<a href='#home' onClick={() => setToggleMenu(false)}>
									Home
								</a>
							</li>
							<li>
								<a href='#about' onClick={() => setToggleMenu(false)}>
									About
								</a>
							</li>
							<li>
								<a href='#menu' onClick={() => setToggleMenu(false)}>
									Menu
								</a>
							</li>
							<li>
								<a href='#awards' onClick={() => setToggleMenu(false)}>
									Awards
								</a>
							</li>
							<li>
								<a href='#contact' onClick={() => setToggleMenu(false)}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
