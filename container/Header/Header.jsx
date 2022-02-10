import React from 'react'
import Image from 'next/image'
import SubHeading from '../../components-new/SubHeading/SubHeading'
import QuranHome from '../../assets/quran-home.png'
const Header = () => (
	<div className='app__header app__wrapper section__padding' id='home'>
		<div className='app__wrapper_info'>
			<SubHeading title='A great place for Education' />
			<h1 className='app__header-h1'>Your Journey to The Quran</h1>
			<p className='p__opensans' style={{ margin: '2rem 0' }}>
				Learn with Tutors you choose for Tajweed, Recitation, Hifz and Arabic
				lessons, in your time, at your rates.{' '}
			</p>
			<button type='button' className='custom__button'>
				Explore
			</button>
		</div>

		<div className='app__wrapper_img'>
			<Image width={450} height={550} src={QuranHome} alt='header_img' />
		</div>
	</div>
)

export default Header
