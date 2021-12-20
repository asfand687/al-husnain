import Image from 'next/image'
import Link from 'next/link'
import AlHasnain from '../public/alhassnain-logo.png'
import { courses } from '../data/data'
function OurCourses() {
	return (
		<section className='w-full lg:max-w-7xl text-gray-600 py-10 px-4 mx-auto flex flex-col items-center'>
			<div className='grid grid-cols-3 gap-6'>
				{courses.map((course) => (
					<article key={course.id} className='w-80 rounded-md shadow-2xl'>
						<Image
							className='rounded-md object-cover'
							src={AlHasnain}
							alt='balloons'
						/>
						<div className='p-6 flex flex-col justify-between'>
							<div>
								<h2 className='font-medium text-2xl pb-2'>{course.title}</h2>
								<p className='text-justify'>{course.description}</p>
								<p className='pt-2'>
									<strong>Duration:</strong>{' '}
									<span className='text-xl'>{course.duration}</span>
								</p>
							</div>
							<div>
								<Link href='#'>
									<a className='bg-blue-500 px-10 text-white font-medium hover:opacity-80 py-3 rounded mt-4 uppercase inline-flex'>
										More Info
									</a>
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default OurCourses
