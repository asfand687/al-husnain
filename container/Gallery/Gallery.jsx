import React from 'react'
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from 'react-icons/bs'
import Image from 'next/image'

import SubHeading from '../../components-new/SubHeading/SubHeading'
import { images } from '../../constants'

const Gallery = () => {
	const scrollRef = React.useRef(null)

	const scroll = (direction) => {
		const { current } = scrollRef

		if (direction === 'left') {
			current.scrollLeft -= 300
		} else {
			current.scrollLeft += 300
		}
	}

	return (
		<div className='app__gallery flex__center'>
			<div className='app__gallery-content'>
				<SubHeading title='' />
				<h1 className='headtext__cormorant'>Our Courses</h1>
				<p
					className='p__opensans'
					style={{ color: '#AAAAAA', marginTop: '2rem' }}
				>
					We provide a wide range of courses based upon the unique requirementrs
					of our customers.
				</p>
				<button type='button' className='custom__button'>
					More Courses
				</button>
			</div>
			<div className='app__gallery-images'>
				<div className='app__gallery-images_container' ref={scrollRef}>
					{[
						{
							id: 1,
							img: images.gallery01,
							title: 'Quran Reading',
						},
						{ id: 2, img: images.gallery02, title: 'Quran Recitation' },
						{ id: 3, img: images.gallery03, title: 'Quran Memorization' },
					].map((image, index) => (
						<div
							className='app__gallery-images_card '
							key={`gallery_image-${index + 1}`}
						>
							<Image
								width={200}
								height={150}
								src={image.img}
								alt='gallery_image'
							/>
							<h1 className='headtext__cormorant'>{image.title}</h1>
							<div className='gallery__image-icon'>
								<button type='button' className='custom__button'>
									View More
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='app__gallery-images_arrows'>
					<BsArrowLeftShort
						className='gallery__arrow-icon'
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className='gallery__arrow-icon'
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	)
}

export default Gallery
