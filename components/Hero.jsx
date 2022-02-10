import Image from 'next/image'
import Link from 'next/link'
import Laptop from '../public/laptop.png'

function Hero() {
	return (
		<section className='w-full relative min-h-[300px] bg-[#DCEFFD] text-[#613A3A] bg-border-radius'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto pt-24 flex flex-col lg:flex-row'>
				<article className='flex-1 order-2 md:order-1'>
					<h2 className='font-bold leading-[3.5rem] text-[2.5rem] md:tracking-wide md:text-[50px] uppercase'>
						Your Journey to <br />
						the Quran
					</h2>
					<div className='pt-4 text-xl font-semibold'>
						<p>Learn with Tutors you choose for Tajweed,</p>
						<p>Recitation, Hifz and Arabic lessons,</p>
						<p>in your time, at your rates.</p>
					</div>
					<Link href='#'>
						<a className='inline-flex bg-[#613A3A] px-10 text-[#DCEFFD] font-medium hover:opacity-80 py-3 rounded mt-4 uppercase'>
							Register
						</a>
					</Link>
				</article>
				<article className='flex-1 order-1 mx:order-2 pb-4 md:pb-0'>
					<Image src={Laptop} alt='src' />
				</article>
			</div>
			<div className='relative h-[200]'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#fff'
						fill-opacity='1'
						d='M0,32L1440,160L1440,320L0,320Z'
					></path>
				</svg>
			</div>
		</section>
	)
}

export default Hero
