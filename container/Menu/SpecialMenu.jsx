import React from 'react'
import SubHeading from '../../components-new/SubHeading/SubHeading'
import { data, images } from '../../constants'

const SpecialMenu = () => (
	<div className='app__specialMenu flex__center section__padding' id='menu'>
		<div className='app__specialMenu-title'>
			<SubHeading title='Choose the course that covers your needs' />
			<h1 className='headtext__cormorant'>Online Quran and Arabic Classes</h1>
		</div>

		<div className='app__specialMenu-menu'>
			<p className='p__opensans'>
				Reading Arabic and reciting the Quran correctly is a difficult task in
				itself. AlHasnain was started to provide Arabic and Quran education
				through an interactive online environment. The goal is to give students
				a chance to not only understand the language, but to excel at it. Yet
				excellence can only be achieved through regular practice that fits into
				an active lifestyle. Alhasnain's experienced, high-quality instructors
				offer this education through personalized, one-on-one, online sessions
				that are suitable for the entire family — including some of the best
				online Quran classes for kids.
			</p>
			<p className='p__opensans'>
				AlHasnain's instructors are second to none in the Islamic community.
				Each online Quran tutor has graduated from Al-Azhar University in Cairo.
				The institution's tradition of learning and nurturing faith has a rich
				1,000-plus year history. These tutors are fully versed in the best
				methods to teach and learn Arabic and the Quran online, furthermore,
				giving them the skills needed to help any student of any age.
			</p>
		</div>
	</div>
)

export default SpecialMenu
