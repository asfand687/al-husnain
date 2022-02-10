import React from 'react'
import Image from 'next/image'
import Quran from '../../assets/quran.png'

const SubHeading = ({ title }) => (
	<div style={{ marginBottom: '1rem' }}>
		<p className='p__cormorant'>{title}</p>
		<Image width={50} src={Quran} alt='quran_image' className='spoon__img' />
	</div>
)

export default SubHeading
