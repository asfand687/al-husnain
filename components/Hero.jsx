import Image from 'next/image'
import Laptop from '../public/laptop.png'

function Hero() {
	return (
		<section className='w-full min-h-96 bg-green-300'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto pt-24 flex flex-col lg:flex-row'>
				<article className='flex-1'>
					<h2 className='font-bold tracking-wider text-6xl'>
						Your Journey to <br />
						the Quran
					</h2>
					<div className='pt-6 text-xl font-semibold'>
						<p>Learn with Tutors you choose for Tajweed,</p>
						<p>Recitation, Hifz and Arabic lessons,</p>
						<p>in your time, at your rates.</p>
					</div>
				</article>
				<article className='flex-1'>
					<Image src={Laptop} alt='src' />
				</article>
			</div>
		</section>
	)
}

export default Hero
