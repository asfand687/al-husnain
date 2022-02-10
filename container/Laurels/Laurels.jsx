import React from 'react'
import Image from 'next/image'
import SubHeading from '../../components-new/SubHeading/SubHeading'
import { images, data } from '../../constants/index'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
	<div className='app__laurels_awards-card'>
		<Image src={imgUrl} alt='awards' />
		<div className='app__laurels_awards-card_content'>
			<p className='p__cormorant' style={{ color: '#DCCA87' }}>
				{title}
			</p>
			<p className='p__opensans'>{subtitle}</p>
		</div>
	</div>
)

const Laurels = () => (
	<div className='app__bg app__wrapper section__padding' id='awards'>
		<div className='app__wrapper_info'>
			<SubHeading title='Your requirements, our courses.' />
			<h1 className='headtext__cormorant'>What we offer</h1>

			<div className='app__laurels_awards'>
				{data.awards.map((award) => (
					<AwardCard award={award} key={award.title} />
				))}
			</div>
		</div>

		<div className='app__wrapper_img'>
			<Image src={images.quran3} alt='laurels_img' />
		</div>
	</div>
)

export default Laurels
