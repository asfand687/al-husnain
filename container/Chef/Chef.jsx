import React from 'react'

import Subheading from '../../components-new/SubHeading/SubHeading'
import { images } from '../../constants'

const Chef = () => (
	<div className='app__bg  app__courseoffering section__padding'>
		<div className='text-center'>
			<h1 className='headtext__cormorant'>Our Course Offerings</h1>
			<div className='app__chef-content'>
				<p className='p__opensans'>
					{' '}
					Alhasnain offers three types of course offerings.{' '}
				</p>
			</div>

			<div className='app__courseoffering flex__center'>
				<article className='app__courseoffering-descbox'>
					<h2>Online Arabic Classes</h2>
					<p>
						With levels from beginners to advanced, these classes focus on
						learning the language, reading, writing, expression and grammar.
					</p>
					<a href='#'>Read More</a>
				</article>
				<article className='app__courseoffering-descbox'>
					<h2>Quran Memorization</h2>
					<p>
						An instructor works directly with students to memorize parts of the
						Quran or its entirety.
					</p>
					<a href='#'>Read More</a>
				</article>
				<article className='app__courseoffering-descbox'>
					<h2>Online Quran Classes</h2>
					<p>
						Learn Quran online with a large focus on Tajweed, courses are
						structured around proper pronunciation and recitation of the Quran
					</p>
					<a href='#'>Read More</a>
				</article>
			</div>
		</div>
	</div>
)

export default Chef
